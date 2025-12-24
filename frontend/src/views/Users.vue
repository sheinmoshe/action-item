<template>
  <UsersTable :all-users="allUsers" />
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';

import {useUser} from "../composables/use-users";
import UsersTable from "../components/UsersTable.vue";

const { allUsers, getUsers } = useUser();

onMounted(getUsers);

</script>
<style scoped>
</style>
