<template>
    <div>
        <div class="hrader_box">
            消息通知
        <return-up></return-up>
        </div>
    <div class="sse">暂无消息呢</div>
    </div>
</template>

<script>
    import ReturnUp from "../components/return-up";
    export default {
        name: "person-msg",
        components: {ReturnUp}
    }
</script>

<style scoped lang="scss">
    .sse {
        padding-top: 30vh;
        font-size: 14px;
        line-height: 24px;
        color: #585858;
        letter-spacing: 0;
        text-align: center;
        &::before {
            content: "";
            display: inline-block;
            width: 21px;
            height: 1px;
            background: #585858;
            vertical-align: middle;
            margin-right: 5px;
        }
        &::after {

            margin-left: 5px;
            content: "";
            display: inline-block;
            width: 21px;
            height: 1px;
            background: #585858;
            vertical-align: middle;
        }
    }
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
    }
</style>