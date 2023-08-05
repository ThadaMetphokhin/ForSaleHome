
<template>
    <div :style="{ position: 'relative',height:'500' }">
        <SpeedDial :model="items11" :radius="90" type="quarter-circle" direction="up-right" :style="{ top: 'calc(40% - 2rem)', left: 0,bottom:0,innerWidth:1 }" />
    </div>
</template>
<style scroped>
.p-button-icon-only{
    width: 1rem;
    height: 1rem;
}
</style>
<script setup  lang="ts">
import SpeedDial from 'primevue/speeddial';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
//for linear
const items11 = ref([
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])

</script>