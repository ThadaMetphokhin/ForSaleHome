<template>
    <div class="content11" :id="items.Idele" :style="items.color">
        <br>
        <h1>{{ items.name }}</h1>
        <div class="reveal">
            <a-carousel arrows dots-class="slick-dots slick-thumb">

                <template #customPaging="props">

                    <a>
                        <img :src="items.data(props.i)" />
                    </a>
                </template>
                <div v-for="item in items.indeximg" :key="item">
                    <a-image :src="items.data(item - 1)" />
                </div>

            </a-carousel>
        </div>
        <br>
    </div>
</template>
<style scoped>
.content11 {
    position: relative;
}

.content11 h1 {
    position: absolute;
    left: 1rem;
}

.reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 0.5s all ease;
}

.reveal.active {
    transform: translateY(0px);
    opacity: 1;
}

.ant-carousel :deep(.slick-dots) {
    position: relative;
    height: auto;
    z-index: 0;
}

.ant-carousel :deep(.slick-slide img) {
    border-radius: 18px;
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 50%;
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
    border-radius: 5px;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
    filter: grayscale(0%);
}

@media screen and (max-width:450px) {
    .content11 h1 {
        font-size: 1rem;
        ;
    }
}

@media screen and (max-width:415px) {
    .ant-carousel :deep(.slick-slide img) {
        margin-top: 2rem;
        position: relative;
        border-radius: 18px;
        border: 5px solid #fff;
        display: block;
        margin-left: 6rem;
    }

    .ant-carousel :deep(.slick-thumb li) {

        left: -0.8rem;
    }
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