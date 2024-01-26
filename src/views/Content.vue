
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
        <img src="../assets/Banner/salehome.png">
      </div>
      <hr>
    </div>
  </div>
  <div class="Information">
    <p>{{ $t("Information.topicheader") }}</p>

    <div class="item">
      <p class="bannerprice">{{ $t("Information.price") }}</p>
      <div class="iconroom">
        <fa icon="fa-solid fa-house-user" style="color: #ffffff;" />
      </div>
      <p>{{ $t("Information.Topic.topic1") }}</p>
      <ul >
        <li>{{ $t("Information.textinformaiton.text1") }}</li>
        <li>{{ $t("Information.textinformaiton.text2") }}</li>
      </ul>
      <div class="iconlocation">
        <fa icon="fa-solid fa-location-dot" style="color: #ffffff;" />
      </div>
      <p>{{ $t("Information.Topic.topic2") }}</p>
      <ul >
        <li>{{ $t("Information.textinformaiton.text3") }}</li>
        <li>{{ $t("Information.textinformaiton.text4") }}</li>
        <li>{{ $t("Information.textinformaiton.text5") }}</li>

      </ul>
      <div class="iconcar">
        <fa icon="fa-solid fa-car-side" style="color: #ffffff;" />
      </div>
      <p>{{ $t("Information.Topic.topic3") }}</p>
      <ul >
        <li>{{ $t("Information.textinformaiton.text6") }}</li>
      </ul>
    </div>
  </div>
  <div class="el1" id="Fronthome">
    <br>
    <div class="textstyle">
      <h1>{{ $t("Navbar.menu1") }}</h1>
    </div>
    <br>
    <div class="set1">
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
    <div class="textinformation">
      <p>{{$t("SectionInfor.Topic1.topic1")}}</p>
      <ul>
        <li>{{$t("SectionInfor.Topic1.list1")}}</li>
        <li>{{$t("SectionInfor.Topic1.list2")}}</li>
        <li>{{$t("SectionInfor.Topic1.list3")}}</li>
      </ul>
    </div>
  </div>
  <br>
  <br>
  <SectionInformation />
  <br>
  <div class="contentmaps">
    <div class="el">
      <div class="text">
        <p>{{ $t("Navbar.menu6") }}</p>
      </div>
      <div class="Maps" id="Maps">

        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1691229639588!6m8!1m7!1ssXykm0Nlc3sV1cxv-RK7Ew!2m2!1d19.34101253260362!2d100.1278765392856!3f184.00762339263792!4f-6.17299409900582!5f0.7820865974627469"
          style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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
import '../views/Navbar.css'


import { reveal, reveal2 } from './Contentjs'
import Navbar from '../components/Navbar.vue'
import SectionInformation from '../components/SectionInformatio.vue'
import Footer from '../components/Footer.vue'

//Element จะค่่อยๆ โชว์ให้เห็น
window.addEventListener("scroll", reveal);

window.addEventListener("scroll", reveal2)


const baseUrl = '/ImageHouse/Areafonthome/';


export default defineComponent({
  components: {
    Navbar,
    SectionInformation,
    Footer,
  },
  setup() {

    const getImgUrl = (i: number) => {
      return `${baseUrl}${i + 1}.jpg`;
    };
    return {
      getImgUrl
    }
  },
  methods: {
    movetoTop() {
      window.scrollTo(0, 0)
    },
  },

});

export function movetoFronthome() {
  const fonthome = document.getElementById('Fronthome')
  fonthome?.scrollIntoView({ behavior: "smooth" })
}
export function movetoRoom1() {
  const Room1 = document.getElementById('Room1')
  Room1?.scrollIntoView({ behavior: "smooth" })
}
export function movetoRoom2() {
  const Room2 = document.getElementById('Room2')
  Room2?.scrollIntoView({ behavior: "smooth" })
}
export function movetoCenterhome() {
  const Centerhome = document.getElementById('CenterRoomhome')
  Centerhome?.scrollIntoView({ behavior: "smooth" })
}
export function movetoBathRoominhome() {
  const BathRoominhome = document.getElementById('BathRoominhome')
  BathRoominhome?.scrollIntoView({ behavior: "smooth" })
}
export function movetoCookingRoom() {
  const RoomCooking = document.getElementById('RoomCooking')
  RoomCooking?.scrollIntoView({ behavior: "smooth" })
}
export function movetoMaps() {
  const Maps = document.getElementById('Maps')
  Maps?.scrollIntoView({ behavior: "smooth" })
}



</script>