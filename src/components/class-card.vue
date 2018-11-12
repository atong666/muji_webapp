<template>
    <li class="class_list">
        <img src="../assets/15277724651527499866woman.jpeg"/>
        <div class="name">
            {{clo_name}}
        </div>
    </li>
</template>

<script>
    export default {
        name: "class-card",
        props: {
            clo_name: ''
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .class_list {
        padding: 7px;
        width: 45vw;
        height: 45px;
        background-color: #fff;
        float: left;
        box-sizing: border-box;
        margin-right: 2vw;
        margin-bottom: 2vw;
        position: relative;
        img {
            width: 30px;
            height: 30px;
            display: block;
            position: absolute;
            left: 7px;
            top: 7px;
        }
        .name {
            font-size: 12px;
            color: #030303;
            line-height: 30px;
            letter-spacing: -.15px;
            text-align: center;
            margin-left: 50px;
        }
    }
</style>