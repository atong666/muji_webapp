<template>
    <div>
        <title-head :me_name="me_name"></title-head>
        <div class="head_box">
        <index-title :cont_name="title_name" :mm_pId="mm_pId_1"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in items" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-title :cont_name="title_name_t" :mm_pId="mm_pId_2"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in lifes" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        <index-title :cont_name="title_name_f" :mm_pId="mm_pId_3"></index-title>
        <div class="card-box">
            <ul class="cxs-cc">
                <class-card :clo_name="item.name" v-for="item in chis" :key="item.id"></class-card>
                <div class="clear"></div>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
    import TitleHead from "../components/title-head";
    import IndexTitle from "../components/index-title";
    import ClassCard from "../components/class-card";

    export default {
        name: "classify",
        data() {
            return {
                mm_pId_1:'',
                mm_pId_2:'',
                mm_pId_3:'',
                me_name: '分类',
                items: [],
                title_name: '衣服杂货',
                title_name_t: "生活杂货",
                title_name_f: "食品",
                title_name_hh:"新到商品",
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
        components: {ClassCard, IndexTitle, TitleHead},
        created() {
            this.axios.get(`/api/category/sub?pId=1`)
                .then((result) => {
                    if (result.data.status) {
                        this.mm_pId_1 = result.data.data[0].id;
                        this.mm_pId_2 = result.data.data[1].id;
                        this.mm_pId_3 = result.data.data[2].id;
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

<style scoped>
    .head_box{
        margin-top: 44px;
    }
</style>