<template>
    <div class="elm1" id="Room1">
        <p class="topic1">ห้องนอน 1</p>
        <div class="textinformation1">
            <p>รายละเอียด</p>
            <ul>
                <li>แอร์ 1 ตัว</li>
                <li>พัดลม 1 ตัว</li>
                <li>ไฟ 1 ดวง</li>
            </ul>
        </div>
        <br>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="getImgUrl1(props.i)" />
                    </a>
                </template>
                <div v-for="item in 3" :key="item">
                    <a-image :src="getImgUrl1(item - 1)" />
                </div>

            </a-carousel>
        </div>
    </div>
    <div class="elm2" id="Room2">
        <p class="topic2">ห้องนอน 2</p>
        <div class="textinformation2">
            <p>รายละเอียด</p>
            <ul>
                <li>แอร์ 1 ตัว</li>
                <li>พัดลม 1 ตัว</li>
                <li>ไฟ 1 ดวง</li>
            </ul>
        </div>
        <br>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="getImgUrl2(props.i)" />
                    </a>
                </template>
                <div v-for="item in 2" :key="item">
                    <a-image :src="getImgUrl2(item - 1)" />
                </div>

            </a-carousel>
        </div>
        <br>
    </div>
    <div class="elm3" id="CenterRoomhome">
        <p class="topic3">ห้องโถงกลางบ้าน</p>
        <div class="textinformation3">
            <p>รายละเอียด</p>
            <ul>
                <li>แอร์ 1 ตัว</li>
                <li>พัดลม 1 ตัว</li>
                <li>ไฟ 1 ดวง</li>
            </ul>
        </div>
        <br>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="getImgUrl3(props.i)" />
                    </a>
                </template>
                <div v-for="item in 3" :key="item">
                    <a-image :src="getImgUrl3(item - 1)" />
                </div>

            </a-carousel>
        </div>
        <br>
    </div>
    <div class="elm4" id="BathRoominhome">
        <p class="topic1">ห้องน้ำในตัวบ้าน</p>
        <div class="textinformation4">
            <p>รายละเอียด</p>
            <ul>
                <li>แอร์ 1 ตัว</li>
                <li>พัดลม 1 ตัว</li>
                <li>ไฟ 1 ดวง</li>
            </ul>
        </div>
        <br>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="getImgUrl4(props.i)" />
                    </a>
                </template>
                <div v-for="item in 2" :key="item">
                    <a-image :src="getImgUrl4(item - 1)" />
                </div>

            </a-carousel>
        </div>
        <br>
    </div>
    <div class="elm5" id="RoomCooking">
        <p class="topic5">ห้องครัว</p>
        <div class="textinformation5">
            <p>รายละเอียด</p>
            <ul>
                <li>แอร์ 1 ตัว</li>
                <li>พัดลม 1 ตัว</li>
                <li>ไฟ 1 ดวง</li>
            </ul>
        </div>
        <br>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="getImgUrl5(props.i)" />
                    </a>
                </template>
                <div v-for="item in 3" :key="item">
                    <a-image :src="getImgUrl5(item - 1)" />
                </div>

            </a-carousel>
        </div>
        <br>
    </div>
</template>
<style scoped>
@import url('./css/section.css');
@import url('./css/sectionelement.css');
</style>
<script  lang="ts">
import { defineComponent } from 'vue';

//location of picture
const baseUrl1 = '/ImageHouse/FontRoom/';
const baseUrl2 = '/ImageHouse/BackRoom/';
const baseUrl3 = '/ImageHouse/Centerhome/';
const baseUrl4 = '/ImageHouse/BathRoom/';
const baseUrl5 = '/ImageHouse/RoomCoking/';
export default defineComponent({
    setup() {
        const getImgUrl1 = (i: number) => {
            return `${baseUrl1}${i + 1}.jpg`;
        };
        const getImgUrl2 = (i: number) => {
            return `${baseUrl2}${i + 1}.jpg`;
        };
        const getImgUrl3 = (i: number) => {
            return `${baseUrl3}${i + 1}.jpg`;
        };
        const getImgUrl4 = (i: number) => {
            return `${baseUrl4}${i + 1}.jpg`;
        };
        const getImgUrl5 = (i: number) => {
            return `${baseUrl5}${i + 1}.jpg`;
        };
        return {
            getImgUrl1,
            getImgUrl2,
            getImgUrl3,
            getImgUrl4,
            getImgUrl5
        }
    }
})
</script>