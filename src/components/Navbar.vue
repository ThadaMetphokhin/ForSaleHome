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


const fonthome = document.getElementById('Fronthome')
const Room1 = document.getElementById('Room1')
const Room2 = document.getElementById('Room2')
const Centerinhome = document.getElementById('CenterRoomhome')
const BathRoominhome = document.getElementById('BathRoominhome')
const RoomCooking = document.getElementById('RoomCooking')
const items = ref([
  {
    label: 'หน้าบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => fonthome?.scrollIntoView()
  },
  {
    label: 'ห้องนอน',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'ห้องนอน 1',
        icon: 'pi pi-fw pi-align-left',
        command: () => Room1?.scrollIntoView()
      },
      {
        label: 'ห้องนอน 2',
        icon: 'pi pi-fw pi-align-right',
        command: () => Room2?.scrollIntoView()
      },
    ]
  },
  {
    label: 'โถงกลางบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => Centerinhome?.scrollIntoView()
  },
  {
    label: 'ห้องน้ำในตัวบ้าน',
    icon: 'pi pi-fw pi-file',
    command: () => BathRoominhome?.scrollIntoView()
  },
  {
    label: 'ห้องครัว',
    icon: 'pi pi-fw pi-file',
    command: () => RoomCooking?.scrollIntoView()
  },

]);

</script>