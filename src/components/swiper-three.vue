<template>
    <div>
        <mt-swipe :auto="3000" class="swiper_three">
            <mt-swipe-item>
                <img src="../assets/4550002512064_01_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512064_02_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512064_03_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512064_04_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512064_05_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512064_06_400.jpg" width="100%"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/4550002512156_400.jpg" width="100%"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="item_name">
            <div class="name">
                棉V领短袖T恤_厚款T恤_2件装
            </div>
            <div class="price">
                ¥178
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "swiper-three"
    }
</script>

<style scoped lang="scss">
    .swiper_three {
        padding-top: 44px;
        $width: 100vw;
        width: $width;
        height: $width;
        img {
            display: block;
        }
    }
    .item_name{
        text-align: center;
        padding: 24px 4vw 18px;
        background-color: #fff;
        .name{
            font-size: 14px;
            color: #000;
            line-height: 21px;
        }
        .price{
            font-size: 18px;
            color: #000;
            letter-spacing: -.21px;
            font-weight: 900;
        }
    }
</style>