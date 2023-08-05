
<template>
  <Navbar />

  <br>
  <br>
  <br>
  <img src="../assets/Banner/Banner.png" style="width: 100%;" alt="Banner"/>
  <br>
  <br>
  <br>

  <div style="width: 100%;">
    <div class="address">
      <div class="box">
        <p>รายละเอียดอื่นๆ</p>
        <hr style="width: 80%; border-top: 0.3rem solid rgb(90, 90, 90); border-radius: 10px;">
        <p>-</p>
      </div>


    </div>
    <a-layout-content>
      <div class="el1" id="Fronthome">
        <br>
        <div class="textstyle" id="setT">
          <h1>หน้าบ้าน</h1>
        </div>
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
        <br>
        <br>
      </div>
      <SectionInformation v-for="(items, index) in item1 " :key="index" :items="items" />
      <br>
      <div style="margin-left: 1rem;font-weight: bold;">
        <p>แผนที่</p>
      </div>
      <div class="Maps" id="Maps">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1691229639588!6m8!1m7!1ssXykm0Nlc3sV1cxv-RK7Ew!2m2!1d19.34101253260362!2d100.1278765392856!3f184.00762339263792!4f-6.17299409900582!5f0.7820865974627469"
           style="border:0;" allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </a-layout-content>
  </div>

  <a class="scrollup" @click="movetoTop" id="scrollupshow">
    <fa icon="fa-solid fa-circle-arrow-up" size="2xl" bounce />
  </a>
  <div class="Contracticon">
    <a class="line" href="https://line.me/ti/p/GqqZOQYjt_">
      <img width="40" src="/public/line.png" />
    </a>
    <a class="phone" href="tel:0968071248">
      <img width="40" src="/public/phone-call.png" />
    </a>
  </div>
  <Footer />
</template>
<style scoped>
/* For demo */
@import url('./Antdesign.css');
@import url('./style.css');
</style>

<script  lang="ts">
import { defineComponent } from 'vue';
import { ref } from "vue";
import '../views/Navbar.css'

//Linear



import { reveal, reveal2 } from './Contentjs'
import Navbar from '../components/Navbar.vue'
import SectionInformation from '../components/SectionInformatio.vue'
import Linear from '../components/Linear.vue'
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
//for Linear 
const item11 = ref([
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/'
    }
  }
])
const item1 = ref([

  {
    id: 2,
    name: 'ห้องนอน 1',
    Idele: 'Room1',
    data: getImgUrl1,
    color: 'background-color: #E3E0D9; margin-top:-1.4rem; color:white;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 3
  },
  {
    id: 3,
    name: 'ห้องนอน 2',
    Idele: 'Room2',
    data: getImgUrl2,
    color: 'background-color: #F0EF6C; margin-top:-1.4rem;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #A8DDB4;',
    indeximg: 2
  },
  {
    id: 4,
    name: 'โถงกลางบ้าน',
    Idele: 'CenterRoomhome',
    data: getImgUrl3,
    color: 'background-color: #E3E0D9; margin-top:-1.4rem; color:white;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 2
  },
  {
    id: 5,
    name: 'ห้องน้ำในตัวบ้าน',
    Idele: 'BathRoominhome',
    data: getImgUrl4,
    color: 'background-color: #F0EF6C; margin-top:-1.4rem;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #A8DDB4;',
    indeximg: 2
  },
  {
    id: 6,
    name: 'ห้องครัว',
    Idele: 'RoomCooking',
    data: getImgUrl5,
    color: 'background-color: #E3E0D9; margin-top:-1.4rem; color:white;',
    textstyle: 'border-radius: 2rem; text-align: center ;background-color: #272647;',
    indeximg: 3
  },
]);



export default defineComponent({
  components: {
    Navbar,
    SectionInformation,
    Linear,
    Footer,

  },
  setup() {

    return {
      item11,
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
export function movetoMaps(){
  const Maps = document.getElementById('Maps')
  Maps?.scrollIntoView()
}



</script>