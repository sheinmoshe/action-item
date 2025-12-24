import { type Ref, ref } from 'vue';
import {User} from "../modules/user";
export const useUser = () => {
    const allUsers: Ref<Array<User> | []> = ref([]);

    const getUsers = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then((res) => res.json())
            .then((users) => (allUsers.value = users.results))
            .catch((err) => console.log(err));
        //TODO add a UI toaster for showing failed fetch
    };

    const getSavedUsers = () => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((users) => (allUsers.value = users))
            .catch((err) => console.log(err));
        //TODO add a UI toaster for showing failed fetch
    }

    const saveUser = (user:User) => {
          fetch('api/save-user', {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Indicate the content type
            },
            body: JSON.stringify(user), // Convert the JavaScript object to a JSON string
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => console.log('Success:', data)) // Handle the successful response data
            .catch((error) => {
                console.error('Error:', error); // Handle errors
            });
    }

    const deleteUser = (user:User) => {
        fetch('api/delete-user', {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Indicate the content type
            },
            body: JSON.stringify( {
                firstName: user.name.first,
                lastName: user.name.last
            }), // Convert the JavaScript object to a JSON string
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => console.log('Success:', data)) // Handle the successful response data
            .catch((error) => {
                console.error('Error:', error); // Handle errors
            });

    }
    return { allUsers, getUsers, getSavedUsers, saveUser, deleteUser };
};
