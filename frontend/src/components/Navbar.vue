<script setup>
import TabMenu from 'primevue/tabmenu';
const items = [
  { label: 'Home', route: '/' },
  { label: 'Show users', route: '/users' },
  { label: 'Show saved users', route: '/saved-users' },
];

</script>
<template>
    <nav class="navbar">
      <TabMenu :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom >
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </template>
      </TabMenu>
    </nav>
</template>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
  border-bottom: 1px solid #060302;
}
</style>
