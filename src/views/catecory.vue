<template>
    <div>
        <title-head></title-head>
        <div class="tit_head">
            <div class="tit_head_one">
                <swiper ref="mySwiper" class="con_item_list" :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide class="con_item_lists" v-for="item in titles">
                        <div class="res_x">
                            {{item.name}}
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="tit_head_two">
                <div v-for="item in titles_res" class="res fl">
                    {{item.name}}
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleHead from "../components/title-head";

    export default {
        name: "catecory",
        components: {TitleHead},
        props: ['pId'],
        data(){
            return{
                titles_res:[
                    {
                        name:'综合排序'
                    },
                    {
                        name:'按新品'
                    },
                    {
                        name:'按销量'
                    },
                    {
                        name:'按价格'
                    }
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                titles:[],
            }
        },
        created() {
            this.axios.get(`/api/category/sub?pId=${this.pId}`)
                .then((result) => {
                    if (result.data.status) {
                        this.titles = result.data.data;
                        this.titles.unshift({
                            name:"全部"
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                });

        }
    }
</script>

<style scoped lang="scss">
    .res_x{
        padding-top: 11px;
        padding-bottom: 11px;
        font-size: 16px;
        line-height: 22px;
        color: #ddd;
        letter-spacing: .7px;
    }
    .res{
        padding: 11px 15px;
        font-size: 16px;
        line-height: 22px;
        color: #ddd;
        letter-spacing: .7px;
    }
.tit_head{
    width: 100vw;
    padding-top: 44px;
    .tit_head_one{
        padding-left: 20px;
        border-bottom: 1px solid #ddd;
    }
    .tit_head_two{
        padding-left: 5px;
        border-bottom: 1px solid #ddd;
    }
}
</style>