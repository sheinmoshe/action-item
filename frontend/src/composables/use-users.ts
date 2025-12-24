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
    return { allUsers, getUsers };
};
