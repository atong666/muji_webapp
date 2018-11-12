<template>
    <div class="hrader_box">
        {{me_name}}
        <return-up></return-up>
        <car-icon></car-icon>
    </div>
</template>

<script>
    import returnUp from './return-up'
    import carIcon from './car-icon'
    export default {
        name: "title-head",
        props:{
            me_name:''
        },
        components:{
            returnUp,
            carIcon
        }
    }
</script>

<style scoped lang="scss">
    .hrader_box{
        height: 44px;
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