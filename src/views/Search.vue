<template>
    <div>
        <div class="hrader_box">
            <return-up></return-up>
            <input placeholder="搜索商品" class="search_input"/>
        </div>
        <div class="search_cont">
            <div class="title clrar">
                <div class="fl lfet">
                    最近搜索
                </div>
                <div class="fr right">
                    清除记录
                </div>
                <div class="clear"></div>
            </div>
            <div class="card_box">
                <search-card :cont="item" v-for="item in card_cont"></search-card>
            </div>
            <div class="title clrar bott">
                <div class="fl lfet">
                    热门搜索
                </div>
                <div class="fr right co_blue">
                    换一批
                </div>
                <div class="clear"></div>
            </div>
            <div class="card_box">
                <search-card :cont="item" v-for="item in card_cont_bot"></search-card>
            </div>

        </div>
    </div>
</template>

<script>
    import ReturnUp from "../components/return-up";
    import SearchCard from "../components/search-card";
    export default {
        name: "Search",
        components: {SearchCard, ReturnUp},
        data(){
            return{
                card_cont:['上衣','裤子'],
                card_cont_bot:['沙发','睡衣','风扇','靠枕','精油','拉杆箱','化妆水','香薰','衬衫']
            }
        }
    }
</script>

<style scoped lang="scss">
    .hrader_box{
        font-size: 18px;
        color: #000;
        font-weight: 900;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0;
        margin: 0;
        line-height: 44px;
        box-sizing: border-box;
        background-clip: padding-box;
        background: rgba(0,0,0,0);
        border: none;
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 10000;
        border-bottom: .5px solid #b2b2b2;
        background: #f9f9f9;
        height: 44px;
        .search_input{
            box-sizing: border-box;
            display: block;
            width: 315px;
            margin: 0;
            padding: 0;
            border: 0 solid rgba(0,0,0,0);
            border-radius: 0;
            padding: 5px 17px 5px 12px;
            background: #f2f2f2;
            font-size: 14px;
            color: #585858;
            line-height: 18px;
            position: absolute;
            top: 8px;
            right: 5px;
            outline: none;
        }

    }
    .search_cont{
        margin-top: 64px;
        padding: 0px 15px;
        .title{
            .lfet{
                width: 40vw;
                font-size: 16px;
                line-height: 22px;
                color: #000;
                letter-spacing: 2.4px;
                font-weight: 800;
            }
            .right{
                width: 40vw;
                font-size: 14px;
                line-height: 22px;
                color: #7f0019;
                letter-spacing: .79px;
                text-align: right;
            }
        }
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .clear{
        clear: both;
    }
    .card_box{
        padding-top: 10px;
        padding-left: 5px;
    }
    .bott{
        margin-top: 20px;
    }
    .co_blue{
        color: #60b3fa !important;
    }
</style>