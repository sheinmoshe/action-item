Home.vue<template>
	<div class="home">
		<h1>History</h1>
    <UsersTable :all-users="allUsers" />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUser} from "../composables/use-users";
import UsersTable from "../components/UsersTable.vue";
const { allUsers, getSavedUsers } = useUser();

onMounted(getSavedUsers);

</script>
<style scoped>
.home {
	padding: 2rem;
	text-align: center;
}
</style>
