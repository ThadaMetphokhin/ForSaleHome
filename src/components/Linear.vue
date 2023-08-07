<template>
    <SpeedDial :model="items"  direction="up" :style="{ left: 'calc(50% - 2rem)',bottom:0 }"  />
</template>
<style scroped>

.linear{
    background-color: yellow;
}
</style>
<script setup lang="ts">
import {ref} from 'vue'
import SpeedDial from 'primevue/speeddial';



const items = ref([
    {
        label: 'Line',
        icon: 'pi pi-lineicon',
        command: () => (null)
    },
    {
        label: 'Phone',
        icon: 'pi pi-phone',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
</script>