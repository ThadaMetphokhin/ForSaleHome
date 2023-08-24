<template>
  <div class="topnav" id="myTopnav">
    <a href="/" class="brand"><img src="../assets/iconweb/rent.png" /></a>
    <a class="button" @click="movetoFronthome()">{{ $t("Navbar.menu1") }}</a>
    <a class="button" @click="movetoRoom1()">{{ $t("Navbar.menu2.title") }}</a>
    <a class="button" @click="movetoCenterhome()">{{ $t("Navbar.menu3") }}</a>
    <a class="button" @click="movetoBathRoominhome()">{{ $t("Navbar.menu4") }}</a>
    <a class="button" @click="movetoCookingRoom()">{{ $t("Navbar.menu5") }}</a>
    <a class="button" @click="movetoMaps()">{{ $t("Navbar.menu6") }}</a>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
      <fa icon="fa-solid fa-bars" />
    </a>
    <select v-model="$i18n.locale">
      <option v-for="(lang,i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>
<style scoped>
@import url('./css/Navbar.css');
</style>
<script setup lang="ts">

import {
  movetoFronthome,
  movetoRoom1,
  movetoRoom2,
  movetoCenterhome,
  movetoBathRoominhome,
  movetoCookingRoom,
  movetoMaps
} from '../views/Content.vue'

const langs = ['TH','EN']

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x?.classList.value === "topnav") {
    x?.classList.add("responsive");
  } else {
    x?.classList.remove("responsive");
  }

}
window.onclick = function (event) {

  if ((event.target as HTMLInputElement).matches('.button')) {
    var x = document.getElementById("myTopnav");
    x?.classList.remove('responsive')
  }
}



</script>