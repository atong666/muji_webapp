<template>
    <li class="nani">
        <img src="../assets/4945247421323_400.jpg"/>
        <p class="name">{{name}}</p>
        <p class="price">¥{{price}}</p>
    </li>
</template>

<script>
    export default {
        name: "item-card",
        props:{
            name:'',
            price:Number
        }
    }
</script>

<style scoped lang="scss">
    .nani{
        float: left;
        width: 46vw;
        padding: 0px 2.5px 10px;
        box-sizing: border-box;
        background-color: #fff;
        img{
            display: block;
            width: 100%;
        }
        .name{
            font-size: 13px;
            color: #030303;
            line-height: 18px;
            letter-spacing: -.15px;
            margin-top: 9px;
        }
        .price{
            font-size: 15px;
            line-height: 21px;
            color: #000;
            letter-spacing: -.17px;
            font-weight: 900;
            margin-top: 5px;
        }
    }
</style>