<template>
  <div class="card relative z-2 Navbar">
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="/public/for-sale.png" height="40" class="mr-2" />
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
  border-radius: 0px;
  opacity: 0.91;
}



a.p-menubar-button {
  right: 0;
  position: fixed;
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
  movetoCookingRoom,
  movetoMaps
} from '../views/Content.vue'

//Darkmode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);




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
  {
    label: 'แผนที่',
    icon: 'pi pi-fw pi-file',
    command: () => movetoMaps()
  },

]);

</script>