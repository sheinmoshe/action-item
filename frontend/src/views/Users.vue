<template>
  <div class="card p-fluid">
    <DataTable v-model:selection="selectedUser"
               :value="allUsers"   selectionMode="single"  dataKey="id" >
      <template #header>
        <div class="flex justify-content-end">
          <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
        </div>
      </template>

      <Column field="name" header="Name">
        <template #body="slotProps">
          {{getUserDisplayName(slotProps.data.name)}}
        </template>
      </Column>
      <Column field="gender" header="Gender" class="column">
      </Column>
      <Column field="location" header="Country"  class="column">
        <template #body="slotProps">
          {{slotProps.data.location.country}}
        </template>
      </Column>
      <Column field="phone" header="Phone"  class="column">
      </Column>
      <Column field="email" header="Email"  class="column">
      </Column>
    </DataTable>
    <User v-if="selectedUser"  :user="selectedUser" :visible="true" />
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from '@primevue/core/api';
import InputText from 'primevue/column';

import {useUser} from "../composables/use-users";
import User from "../components/User.vue";

import {getUserDisplayName} from "../utils/user.utils";

const { allUsers, getUsers } = useUser();
const selectedUser = ref(null);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  location: { value: null, matchMode: FilterMatchMode.EQUALS }
});

onMounted(getUsers);

</script>
<style scoped>
</style>
