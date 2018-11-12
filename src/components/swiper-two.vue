<template>
    <swiper ref="mySwiper" class="con_item_list" :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
        <swiper-slide class="con_item_lists">
            <router-link to="/item_details"><img src="../assets/4945247905861_400.jpg"/></router-link>
            <p class="yifu_name">这里是衣服的名称呢哈哈哈</p>
            <p class="yifu_price">¥188</p>
        </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: "swiper-two",
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }
        },
        computed: {
            swiper() {
                // return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped lang="scss">
    .con_item_list {
        margin-left: 15px;
        padding-top: 15px;
        .con_item_lists {
            img {
                display: block;
                width: 100%;
            }
            .yifu_name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                color: #666;
                line-height: 17px;
                font-weight: 400;
            }
            .yifu_price {
                font-size: 15px;
                line-height: 21px;
                color: #000;
                letter-spacing: -.17px;
                font-weight: 900;
            }
        }
    }
</style>