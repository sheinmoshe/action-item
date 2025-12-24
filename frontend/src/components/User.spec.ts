import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserComponent from './User.vue';
import PrimeVue from 'primevue/config';
import { Gender } from '../modules/gender.enum';

const mockUser = {
  id: 1,
  name: {
    title: 'Mr',
    first: 'John',
    last: 'Doe'
  },
  gender: 'male' as Gender,
  location: {
    country: 'USA',
    street: {
      number: 123,
      name: 'Main St'
    },
    city: 'New York',
    state: 'NY'
  },
  phone: '123-456-7890',
  email: 'john.doe@example.com',
  picture: {
    large: 'https://example.com/large.jpg',
    medium: 'https://example.com/medium.jpg',
    thumbnail: 'https://example.com/thumbnail.jpg'
  },
  dob: {
    age: 30,
    date: new Date('1995-01-01')
  },
  isUserSaved: false
};

describe('User.vue', () => {
  const createComponent = (props = {}) => {
    return mount(UserComponent, {
      props: {
        user: mockUser,
        visible: true,
        ...props
      },
      global: {
        plugins: [PrimeVue],
        stubs: {
          Dialog: {
            template: '<div v-if="visible"><slot /></div>',
            props: ['visible']
          },
          InputText: true,
          Button: {
            template: '<button><slot /></button>',
            props: ['label']
          }
        }
      }
    });
  };

  it('renders correctly when visible is true', () => {
    const wrapper = createComponent({ visible: true });
    expect(wrapper.isVisible()).toBe(true);
  });

  it('displays user information correctly', () => {
    const wrapper = createComponent();
    
    expect(wrapper.text()).toContain('Mr John Doe');
    expect(wrapper.text()).toContain('Age:  30');
    expect(wrapper.text()).toContain('Birth year: 1995');
    expect(wrapper.text()).toContain('Main St $123');
    expect(wrapper.text()).toContain('city:  New York');
    expect(wrapper.text()).toContain('State: NY');
    expect(wrapper.text()).toContain('Country:  USA');
    expect(wrapper.text()).toContain('Email: john.doe@example.com');
    expect(wrapper.text()).toContain('Phone: 123-456-7890');
    
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(mockUser.picture.large);
  });

  it('shows Delete button only when isUserSaved is true', async () => {
    let wrapper = createComponent({ user: { ...mockUser, isUserSaved: false } });
    let buttons = wrapper.findAll('button');
    expect(buttons.some(b => b.text().includes('Delete'))).toBe(false);

    wrapper = createComponent({ user: { ...mockUser, isUserSaved: true } });
    buttons = wrapper.findAll('button');
    expect(buttons.some(b => b.text().includes('Delete'))).toBe(true);
  });

  it('closes dialog on Cancel button click', async () => {
    const wrapper = createComponent();
    const cancelButton = wrapper.findAll('button').find(b => b.text().includes('Cancel'));
    await cancelButton?.trigger('click');
    
    // In our stub, visible is a prop, but handleCancel changes isDialogVisible internal ref.
    // However, User.vue doesn't emit anything or update props, it just sets isDialogVisible.value = false.
    // Since isDialogVisible is used in v-model:visible="isDialogVisible" on Dialog.
    // Our stub uses :visible="isDialogVisible".
    
    expect(wrapper.find('div').exists()).toBe(false); // v-if="visible" in stub
  });

  it('closes dialog on Save button click', async () => {
    const wrapper = createComponent();
    const saveButton = wrapper.findAll('button').find(b => b.text().includes('Save'));
    await saveButton?.trigger('click');
    
    expect(wrapper.find('div').exists()).toBe(false);
  });
});
