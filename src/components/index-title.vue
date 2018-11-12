<template>
    <div class="cloth_title">
        <div class="clo_left">
            {{cont_name}}
        </div>
        <div class="clo_right" @click="tototo">
            查看全部
        </div>
        <div class="clear">

        </div>
    </div>
</template>

<script>
    export default {
        name: "index-title",
        props:{
            cont_name:"",
            mm_pId:''
        },
        methods:{
            tototo(){
                this.$router.push({ name: 'catecory', params: { pId: this.mm_pId }});
            }
        }
    }
</script>

<style scoped lang="scss">
    .cloth_title{
        padding: 25px 15px 0px;
        .clo_left{
            float: left;
            font-size: 16px;
            line-height: 22px;
            color: #000;
            letter-spacing: 2.4px;
            font-weight: 800;
        }
        .clo_right{
            float: right;
            font-size: 14px;
            line-height: 22px;
            color: #60b3fa;
            letter-spacing: .79px;
        }
    }
</style>