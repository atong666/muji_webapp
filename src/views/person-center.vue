<template>
    <div>
        <title-head :me_name="me_name"></title-head>
        <router-link to="/person-center/setting">
        <person-user></person-user>
        </router-link>
        <index-title :cont_name="title_name" class="fz-lg"></index-title>
        <fukuan-card></fukuan-card>
        <div class="person_foot">
            <div class="kefu" >
                客服中心
            </div>
            <div class="wenti" >
                常见问题
            </div>
        </div>
    </div>
</template>

<script>
    import titleHead from "../components/title-head"
    import personUser from "../components/person-user"
    import indexTitle from "../components/index-title"
    import FukuanCard from "../components/fukuan-card"

    export default {
        name: "person-center",
        data(){
            return{
                title_name:'我的订单',
                me_name:'我的'
            }
        },
        components: {
            FukuanCard,
            titleHead,
            personUser,
            indexTitle
        },

    }
</script>

<style scoped >
    .person_foot{
        margin-top: 10px;
        background-color: #FFFFFF;
        padding-left: 16px;
    }
    .person_foot .kefu{
        display: block;
        text-decoration: none;
        background-image: url(../assets/muji_jiantou_right.svg);
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: 34px 34px;
        cursor: pointer;
        font-size: 14px;
        color: #000;
        line-height: 44px;
    }
    .person_foot .wenti{
        display: block;
        text-decoration: none;
        background-image: url(../assets/muji_jiantou_right.svg);
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: 34px 34px;
        cursor: pointer;
        font-size: 14px;
        color: #000;
        line-height: 44px;
        border-top: .5px solid rgba(188,187,193,.5);
    }
</style>