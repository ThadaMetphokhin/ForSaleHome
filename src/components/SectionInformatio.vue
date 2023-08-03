<template>
    
    <div >
        <br>
        <div class="text">
            <h1></h1>   
        </div>
        <a-carousel arrows dots-class="slick-dots slick-thumb">
            
            <template #customPaging="props">
                
                <a>
                    <img :src="getImgUrl(props.i)" />
                </a>
            </template>
            <div v-for="item in 4" :key="item">
                <a-image :src="items.data(item - 1)" />
            </div>
            
        </a-carousel>
        <br>
    </div>
</template>
<style scoped>
.text{
    border-radius: 2rem;
    text-align: center  ;
    background-color: yellow;
    width: 15rem;
    margin-left:6rem;
}
.ant-carousel :deep(.slick-dots) {
    position: relative;
    height: auto;
    z-index: 0;
}

.ant-carousel :deep(.slick-slide img) {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 80%;
}

.ant-carousel :deep(.slick-arrow) {
    display: none !important;
}

.ant-carousel :deep(.slick-thumb) {
    bottom: 0px;
}

.ant-carousel :deep(.slick-thumb li) {
    width: 60px;
    height: 45px;
}

.ant-carousel :deep(.slick-thumb li img) {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
    filter: grayscale(0%);
}
</style>
<script  lang="ts">
const baseUrl = './assets/font';
const baseUrl2 = '../../public/ImageHouse/FontRoom/';
const baseUrl3 = '../../public/ImageHouse/BackRoom/';
const baseUrl4 = '../../public/ImageHouse/Centerhome/';
const baseUrl5 = '../../public/ImageHouse/BathRoom/';
const baseUrl6 = '../../public/ImageHouse/RoomCoking/';
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
export {
    getImgUrl,
}
export default {
    props: {
        items: {
            type: Object,
            required: true,
        },
    },
};
</script>