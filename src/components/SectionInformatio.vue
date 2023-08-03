<template>
    
    <div :id="items.Idele" class="reveal" :style="items.color">
        <br>
        <div class="text">
            <h1>{{ items.name }}</h1>   
        </div>
        <a-carousel arrows dots-class="slick-dots slick-thumb">
            
            <template #customPaging="props">
                
                <a>
                    <img :src="items.data"/>
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

export default {
    props: {
        items: {
            type: Object,
            required: true,
        },
    },
};
</script>