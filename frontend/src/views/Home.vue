<template>
	<div class="home">
		<h1>Home Page</h1>
    <Button class="button" @click="handleUsersFetch" label="Fetch" />
    <Button class="button" @click="handleHistoryFetch" label="History" />
  </div>
</template>

<script setup lang="ts">

import Button from 'primevue/button';
import {useRouter} from "vue-router";
const router = useRouter();

const handleUsersFetch = () => {
  router.push('/users');
}

const handleHistoryFetch = () => {
  router.push('/saved-users');
}


</script>
<style scoped>
.home {
	padding: 2rem;
	text-align: center;
}
.button {
	margin: 0.5rem;
}

</style>
