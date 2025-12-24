<template>
  <Dialog v-model:visible="isDialogVisible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <div>
      <img :src="user.picture.large" alt="user" />
    </div>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="username" class="font-semibold w-6rem">
        <span>Name: </span>
        {{getUserDisplayName(user.name)}}</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div>
      <label for="age" class="font-semibold w-6rem">
        <span>Age: </span> {{user.dob.age}} | <span>Birth year:</span> {{getUserBirthYear(user.dob.date)}}</label>
    </div>
    <div>
      <span>Address: </span>
      <div>
        <label for="street" class="font-semibold w-6rem">
          <span>Street: </span>
          {{user.location.street.name}} ${{user.location.street.number}}</label>
        <label for="city" class="font-semibold w-6rem">
          <span>city: </span>
          {{user.location.city}}</label>
        <label for="age" class="font-semibold w-6rem">
          <span>State: </span>{{user.location.state}}</label>
        <label for="age" class="font-semibold w-6rem">
          <span>Country: </span>
          {{user.location.country}}</label>
      </div>
    </div>
    <div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">
          <span>Email: </span>{{user.email}}</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="Phone number" class="font-semibold w-6rem">
          <span>Phone: </span>{{user.phone}}</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
    </div>
    <div class="flex justify-content-end gap-2">
      <Button class="button" type="button" label="Save" severity="primary" @click="handleSave()">Save</Button>
      <Button v-if="user.isUserSaved" class="button" type="button" label="Delete" severity="secondary" @click="handleSave()">Delete</Button>
      <Button class="button" type="button" label="Cancel"  severity="secondary"  @click="handleCancel()">Cancel</Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">

import { PropType, ref } from "vue";
import {User} from "../modules/user";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object as PropType<User>,
    required: true
  }
});

import Dialog from 'primevue/dialog';
import {getUserDisplayName, getUserBirthYear} from "../utils/user.utils";

const isDialogVisible = ref(props.visible)

const handleCancel = () => {
  isDialogVisible.value = false;
}

const handleSave = () => {
  isDialogVisible.value = false;
}


</script>
<style scoped>
.button {
  margin: 0.5rem;
}
</style>
