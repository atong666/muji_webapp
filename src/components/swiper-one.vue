<template>
    <mt-swipe :auto="3000" class="swiper_one">
        <mt-swipe-item>
            <img src="../assets/1535075281sock3s66y_1200.jpeg" width="100%"/>
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../assets/1535075296sale_cn_pc.jpeg" width="100%"/>
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../assets/1537494825mujitogo_ec_1200.jpeg" width="100%"/>
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../assets/1537494906recommend_1200.png" width="100%"/>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: 'swiper-one'
    }
</script>

<style scoped lang="scss">


    .swiper_one {
        padding-top: 44px;
        width: 100vw;
        height: 190px;
        img {
            display: block;
        }
    }
</style>