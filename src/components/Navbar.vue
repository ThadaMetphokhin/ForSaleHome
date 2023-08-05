<template>
  <div class="card relative z-2 Navbar">
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="/public/iconweb/rent.png" height="40" class="mr-2" />
      </template>
    </Menubar>
  </div>
</template>
<style>
span.p-menuitem-text {
  font-family: 'Kodchasan', sans-serif;
  font-weight: bold;
}

div.p-menubar {
  background: #6D9E87;
}

ul.p-menubar-root-list {
  position: fixed;
  right: 1rem;
}

a.p-menubar-button {
  position: fixed;
  right: 1rem;
}
</style>
<script setup lang="ts">
import Menubar from 'primevue/menubar';
import { ref } from 'vue'

import { 
  movetoFronthome,
  movetoRoom1,
  movetoRoom2,
  movetoCenterhome,
  movetoBathRoominhome,
  movetoCookingRoom
} from '../views/Content.vue'






const items = ref([
  {
    label: 'หน้าบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => movetoFronthome()
  },
  {
    label: 'ห้องนอน',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'ห้องนอน 1',
        icon: 'pi pi-fw pi-align-left',
        command: () => movetoRoom1()
      },
      {
        label: 'ห้องนอน 2',
        icon: 'pi pi-fw pi-align-right',
        command: () => movetoRoom1()
      },
    ]
  },
  {
    label: 'โถงกลางบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => movetoCenterhome()
  },
  {
    label: 'ห้องน้ำในตัวบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => movetoBathRoominhome()
  },
  {
    label: 'ห้องครัว',
    icon: 'pi pi-fw pi-file',
    command: () => movetoCookingRoom()
  },

]);

</script>