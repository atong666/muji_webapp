<template>
    <div class="card">
        {{cont}}
    </div>
</template>

<script>
    export default {
        name: "search-card",
        props:{
            cont:''
        }
    }
</script>

<style scoped lang="scss">
    .card {
        display: inline-block;
        padding: 7px 26px;
        margin-bottom: 10px;
        margin-left: 10px;
        background: #fff;
        border-radius: 16px;
        font-size: 12px;
        color: #030303;
        line-height: 18px;
        letter-spacing: -.15px;
    }
</style>