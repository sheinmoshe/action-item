<script setup>

import {getUserDisplayName} from "../utils/user.utils.ts";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import User from "./User.vue";
import {ref} from "vue";

const props = defineProps(
    {
      allUsers: {
        type: Array,
        required: true
      }
    }
)

const selectedUser = ref(null);

</script>

<template>
  <div class="card p-fluid">
    <DataTable v-model:selection="selectedUser"
               :value="allUsers"   selectionMode="single"  dataKey="id" >
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

<style scoped>

</style>