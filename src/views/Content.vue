
<template>
  <Navbar />
  <br>
  <br>
  <br>
  <br>
  <img src="../assets/Banner/Banner.png" style="width: 100%;" />
  <div style="width: 100%;">
    <a-layout-content>
      <a-carousel arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img :src="getImgUrl(props.i)" />
          </a>
        </template>
        <div v-for="item in 4" :key="item">
          <img :src="getImgUrl(item - 1)" />
        </div>
      </a-carousel>
    </a-layout-content>
  </div>
  <div style="width: 100%;">
    <a-layout-content>
      <a-carousel arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img :src="getImgUrl(props.i)" />
          </a>
        </template>
        <div v-for="item in 3" :key="item">
          <img :src="getImgUrl1(item - 1)" />
        </div>
      </a-carousel>
    </a-layout-content>
  </div>
  <a class="scrollup" @click="movetoTop" id="scrollupshow">
    <fa icon="fa-solid fa-circle-arrow-up" size="2xl" bounce />
  </a>
</template>
<style scoped>
/* For demo */
@import url('./style.css');
@import url('./Antdesign.css');
</style>

<script  lang="ts">
import { defineComponent } from 'vue';
import { ref, provide } from "vue";
import '../views/Navbar.css'
import { reveal, reveal2 } from './Contentjs'
import Navbar from '../components/Navbar.vue'


//Element จะค่่อยๆ โชว์ให้เห็น
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2)
// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
  if (!(event.target as HTMLInputElement).matches('.icon')) {
    var dropdowns = document.getElementsByClassName("topnav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('responsive')) {
        openDropdown.classList.remove('responsive');
      }
    }
  }
}
window.onclick = (event) => {
  if (!(event.target as HTMLInputElement).matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const baseUrl = '../../public/ImageHouse/Areafonthome/';
const baseUrl2 = '../../public/ImageHouse/FontRoom/';
const baseUrl3 = '../../public/ImageHouse/BackRoom/';
const baseUrl4 = '../../public/ImageHouse/Centerhome/';
const baseUrl5 = '../../public/ImageHouse/BathRoom/';
const baseUrl6 = '../../public/ImageHouse/RoomCoking/';
export default defineComponent({
  setup() {
    const getImgUrl = (i: number) => {
      return `${baseUrl}${i + 1}.jpg`;
    };
    const getImgUrl1 = (i: number) => {
      return `${baseUrl2}${i + 1}.jpg`;
    };
    const getImgUrl2 = (i: number) => {
      return `${baseUrl3}${i + 1}.jpg`;
    };
    const getImgUrl3 = (i: number) => {
      return `${baseUrl4}${i + 1}.jpg`;
    };
    const getImgUrl4 = (i: number) => {
      return `${baseUrl5}${i + 1}.jpg`;
    };
    const getImgUrl5 = (i: number) => {
      return `${baseUrl6}${i + 1}.jpg`;
    };
    return {
      getImgUrl,
      getImgUrl1,
      getImgUrl2,
      getImgUrl3,
      getImgUrl4,
      getImgUrl5,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    movetoTop() {
      window.scrollTo(0, 0)
    },
  },
});





export function movetoFrontRoom() {
  var el = document.getElementById('Fronthome')
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function movetoRoom1() {
  var el = document.getElementById('Room1')
  el?.scrollIntoView({ behavior: 'smooth' })
}
export function movetoRoom2() {
  var el = document.getElementById('Room2')
  el?.scrollIntoView({ behavior: 'smooth' })
}
export function movetoCenterRoomhome() {
  var el = document.getElementById('CenterRoomhome')
  el?.scrollIntoView({ behavior: 'smooth' })
}
export function movetoBathRoominhome() {
  var el = document.getElementById('BathRoominhome')
  el?.scrollIntoView({ behavior: 'smooth' })
}
export function movetoCookingRoom() {
  var el = document.getElementById('RoomCooking')
  el?.scrollIntoView({ behavior: 'smooth' })
}
export function myFunction() {
  var x = document.getElementById("myTopnav");
  console.log()
  if (x?.classList.toString() === "topnav") {
    x?.classList.add("responsive")
  } else {
    x?.classList.remove("responsive")
  }
}
</script>