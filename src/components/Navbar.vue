<template>
  <div class="topnav" id="myTopnav">
    <img class="logo" src="../assets/iconweb/rent.png" />
    <div class="topnavright">
      <a @click="movetoFrontRoom">หน้าบ้าน</a>
      
      <div class="dropdown">
        <a class="dropbtn" @click="dropdowncontent">ห้องนอน <fa  icon="fa-solid fa-angle-down" /></a>
        <div id="myDropdown" class="dropdown-content">
          <a @click="movetoRoom1">ห้องนอน 1</a>
          <a @click="movetoRoom2">ห้องนอน 2</a>
        </div>
      </div>

      <a @click="movetoCenterRoomhome">โถงกลางบ้าน</a>
      <a @click="movetoBathRoominhome">ห้องน้ำใฝนตัวบ้าน</a>
      <a @click="movetoCookingRoom">ห้องครัว</a>
    </div>
    <a href="javascript:void(0);" class="icon" @click="myFunction">
      <fa icon="fa-solid fa-bars" />
    </a>
  </div>
</template>
<script setup lang="ts">
import {
  movetoFrontRoom,
  movetoRoom1,
  movetoRoom2,
  movetoCenterRoomhome,
  movetoBathRoominhome,
  movetoCookingRoom,
  myFunction,
} from '../views/Content.vue'
function dropdowncontent() {
  var button = document.getElementById('myDropdown')
  button?.classList.toggle('show')
}
</script>