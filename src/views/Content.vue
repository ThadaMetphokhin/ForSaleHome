
<template>
  <Navbar />

  <br>
  <br>
  <br>
  <div class="container">
    <div class="areaheader">
      <h2>Welcome </h2>
      <h3>HOUSE <span> DETAILS</span></h3>
      <div>
        <img src="../assets/Banner/salehome (1).png">
      </div>
      <hr>
    </div>
  </div>
  <div class="Information">
    <p>รายละเอียด</p>
    <div class="item">
      <div class="iconroom">
        <fa icon="fa-solid fa-house-user" style="color: #ffffff;" />
      </div>
      <p>ห้องทั้งหมด</p>
      <ul style="list-style-type: none;">
        <li>ห้องนอน 2 </li>
        <li>ห้องน้ำ 1</li>
      </ul>
      <div class="iconlocation">
        <fa icon="fa-solid fa-location-dot" style="color: #ffffff;" />
      </div>
      <p>สถานที่ใกล้เคียง </p>
      <ul style="list-style-type: none;">
        <li>โรงพยาบาลจุน</li>
        <li>ตลาดเพิ่มทรัพย์</li>
        <li>โลตัส โกเฟรช ซู เปอร์มาร์เก็ต จุน</li>

      </ul>
      <div class="iconcar">
        <fa icon="fa-solid fa-car-side" style="color: #ffffff;" />
      </div>
      <p>ห่างจากตัวเมืองพะเยา</p>
      <ul style="list-style-type: none;">
        <li>40 กิโลเมตร </li>
      </ul>
    </div>
  </div>
  <div class="el1" id="Fronthome">
    <br>
    <div class="textstyle" >
      <h1>หน้าบ้าน</h1>
    </div>
    <br>
    <a-carousel arrows dots-class="slick-dots slick-thumb">
      <template #customPaging="props">
        <a>
          <img :src="getImgUrl(props.i)" />
        </a>
      </template>
      <div v-for="item in 4" :key="item">
        <a-image :src="getImgUrl(item - 1)" />
      </div>
    </a-carousel>
  </div>
  <br>
  <br>
  <SectionInformation v-for="(items, index) in item1 " :key="index" :items="items" />
  <br>
  <div class="contentmaps">
    <br>
    <div style="margin-left: 1rem;font-weight: bold; color: rgb(0, 0, 0);">
      <p>แผนที่</p>
    </div>
    <div class="Maps" id="Maps">

      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1691229639588!6m8!1m7!1ssXykm0Nlc3sV1cxv-RK7Ew!2m2!1d19.34101253260362!2d100.1278765392856!3f184.00762339263792!4f-6.17299409900582!5f0.7820865974627469"
        style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>


  <a class="scrollup" @click="movetoTop" id="scrollupshow">
    <fa icon="fa-solid fa-circle-arrow-up" size="2xl" bounce style="color: #ffffff;" />
  </a>
  <div class="Contracticon">
    <a class="line" href="https://line.me/ti/p/F5lVvslMKI">
      <img width="40" src="/public/line.png" />
    </a>
    <a class="phone" href="tel:0623683064">
      <img width="40" src="/public/phone-call.png" />
    </a>
  </div>

  <Footer />
</template>
<style scoped>
/* For demo */
@import url('./Antdesign.css');
@import url('./style.css');
@import url('./css/header.css');
@import url('./css/information');
</style>

<script  lang="ts">
import { defineComponent } from 'vue';
import { ref } from "vue";
import '../views/Navbar.css'


import { reveal, reveal2 } from './Contentjs'
import Navbar from '../components/Navbar.vue'
import SectionInformation from '../components/SectionInformatio.vue'
import Footer from '../components/Footer.vue'

//Element จะค่่อยๆ โชว์ให้เห็น
window.addEventListener("scroll", reveal);

window.addEventListener("scroll", reveal2)

const baseUrl = '/ImageHouse/Areafonthome/';
const baseUrl2 = '/ImageHouse/FontRoom/';
const baseUrl3 = '/ImageHouse/BackRoom/';
const baseUrl4 = '/ImageHouse/Centerhome/';
const baseUrl5 = '/ImageHouse/BathRoom/';
const baseUrl6 = '/ImageHouse/RoomCoking/';
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

const item1 = ref([

  {
    id: 2,
    name: 'ห้องนอน 1',
    Idele: 'Room1',
    data: getImgUrl1,
    color: 'background-color: rgb(43, 44, 50,1); margin-top:-1.4rem; color:white; height:100vh',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 3
  },
  {
    id: 3,
    name: 'ห้องนอน 2',
    Idele: 'Room2',
    data: getImgUrl2,
    color: 'background-color: rgb(199, 199, 199); margin-top:-1.4rem;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #A8DDB4;',
    indeximg: 2
  },
  {
    id: 4,
    name: 'โถงกลางบ้าน',
    Idele: 'CenterRoomhome',
    data: getImgUrl3,
    color: 'background-color: rgb(43, 44, 50,1); margin-top:-1.4rem; color:white;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 2
  },
  {
    id: 5,
    name: 'ห้องน้ำในตัวบ้าน',
    Idele: 'BathRoominhome',
    data: getImgUrl4,
    color: 'background-color: rgb(199, 199, 199); margin-top:-1.4rem;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #A8DDB4;',
    indeximg: 2
  },
  {
    id: 6,
    name: 'ห้องครัว',
    Idele: 'RoomCooking',
    data: getImgUrl5,
    color: 'background-color: rgb(43, 44, 50,1); margin-top:-1.4rem; color:white;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 3
  },
]);



export default defineComponent({
  components: {
    Navbar,
    SectionInformation,
    Footer,
  },
  setup() {

    return {
      item1,
      getImgUrl,
      getImgUrl1,
      getImgUrl2,
      getImgUrl3,
      getImgUrl4,
      getImgUrl5,
    };

  },
  methods: {
    movetoTop() {
      window.scrollTo(0, 0)
    },
  },

});

export function movetoFronthome() {
  const fonthome = document.getElementById('Fronthome')
  fonthome?.scrollIntoView()
}
export function movetoRoom1() {
  const Room1 = document.getElementById('Room1')
  Room1?.scrollIntoView()
}
export function movetoRoom2() {
  const Room2 = document.getElementById('Room2')
  Room2?.scrollIntoView()
}
export function movetoCenterhome() {
  const Centerhome = document.getElementById('CenterRoomhome')
  Centerhome?.scrollIntoView()
}
export function movetoBathRoominhome() {
  const BathRoominhome = document.getElementById('BathRoominhome')
  BathRoominhome?.scrollIntoView()
}
export function movetoCookingRoom() {
  const RoomCooking = document.getElementById('RoomCooking')
  RoomCooking?.scrollIntoView()
}
export function movetoMaps() {
  const Maps = document.getElementById('Maps')
  Maps?.scrollIntoView()
}



</script>