<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <header-nav></header-nav>
        <swiper-one></swiper-one>
        <div class="now_item">
            <index-title :cont_name="title_name_hh" class="bg_fff"></index-title>
            <swiper-two></swiper-two>
        </div>
        <index-title :cont_name="title_name"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in items" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-title :cont_name="title_name_t"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in lifes" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-title :cont_name="title_name_f"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in chis" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-title :cont_name="title_name_ff" class="bg_fff"></index-title>
        <div class="item-box">
            <ul class="item-list" style="background-color: #fff;">
                <item-card :name="item.name" :price="item.price" v-for="item in tuijians" :key="item.id"></item-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import headerNav from "../components/header-nav"
    import swiperOne from "../components/swiper-one"
    import indexTitle from "../components/index-title"
    import classCard from "../components/class-card"
    import itemCard from "../components/item-card"
    import indexFooter from "../components/index-footer"
    import swiperTwo from "../components/swiper-two"

    export default {
        name: 'home',
        components: {
            // HelloWorld
            headerNav,
            swiperOne,
            indexTitle,
            classCard,
            itemCard,
            indexFooter,
            swiperTwo
        },
        data() {
            return {
                items: [],
                title_name: '',
                title_name_t: "",
                title_name_f: "",
                title_name_hh: "新到商品",
                lifes: [],
                chis: [],
                title_name_ff: "推荐商品",
                tuijians: [{
                    id: 1,
                    name: "塑料橡皮",
                    price: 4
                },
                    {
                        id: 2,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 3,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 4,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 5,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 6,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 7,
                        name: "塑料橡皮",
                        price: 4
                    }, {
                        id: 8,
                        name: "塑料橡皮",
                        price: 4
                    },
                ]
            }
        },
        created() {
            this.axios.get(`/api/category/sub?pId=1`)
                .then((result) => {
                    if (result.data.status) {
                        this.title_name = result.data.data[0].name;
                        this.title_name_t = result.data.data[1].name;
                        this.title_name_f = result.data.data[2].name;
                        this.axios.get(`/api/category/sub?pId=2`)
                            .then((result) => {
                                if (result.data.status) {
                                    this.items = result.data.data;
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        this.axios.get(`/api/category/sub?pId=3`)
                            .then((result) => {
                                if (result.data.status) {
                                    this.lifes = result.data.data;
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        this.axios.get(`/api/category/sub?pId=4`)
                            .then((result) => {
                                if (result.data.status) {
                                    this.chis = result.data.data;
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                })
                .catch((err) => {
                    console.log(err)
                });

        }
    }

</script>
<style lang="scss">
    .card-box {
        padding: 0 4vw;
        overflow: hidden;
        width: 100vw;
        box-sizing: border-box;

    }

    .cxs-cc {
        width: 94vw;
        padding: 10px 0px;
        box-sizing: border-box;
    }

    .bg_fff {
        background-color: #ffffff;
    }

    .item-box {
        padding: 10px 4vw;
        background-color: #ffffff;
    }

    .now_item {
        padding-bottom: 23px;
        background: #fff;
    }
</style>