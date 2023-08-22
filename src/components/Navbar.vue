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
  right: 1rem;
  position: fixed;
}
</style>
<script setup lang="ts">
import { defineComponent } from 'vue';
import Menubar from 'primevue/menubar';
import { ref } from 'vue'


import Button from 'primevue/button';
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
import {
  movetoFronthome,
  movetoRoom1,
  movetoRoom2,
  movetoCenterhome,
  movetoBathRoominhome,
  movetoCookingRoom,
  movetoMaps
} from '../views/Content.vue'






const items = ref([
  {
    label: 'หน้าบ้าน',
    icon: 'pi pi-home',
    command: () => movetoFronthome()
  },
  {
    label: 'ห้องนอน',
    icon: 'pi pi-home',
    items: [
      {
        label: 'ห้องนอน 1',
        icon: 'pi pi-chevron-right',
        command: () => movetoRoom1()
      },
      {
        label: 'ห้องนอน 2',
        icon: 'pi pi-chevron-right',
        command: () => movetoRoom2()
      },
    ]
  },
  {
    label: 'โถงกลางบ้าน',
    icon: 'pi pi-home',
    command: () => movetoCenterhome()
  },
  {
    label: 'ห้องน้ำในตัวบ้าน',
    icon: 'pi pi-home',
    command: () => movetoBathRoominhome()
  },
  {
    label: 'ห้องครัว',
    icon: 'pi pi-home',
    command: () => movetoCookingRoom()
  },
  {
    label: 'แผนที่',
    icon: 'pi  pi-map',
    command: () => movetoMaps()
  },

]);


</script>