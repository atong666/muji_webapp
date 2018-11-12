<template>
    <!--<div style="text-align: center;padding-top: 40px">-->
        <!--<div v-for="item in address">-->
            <!--<div>{{item.nickname}}</div>-->
            <!--<div>{{item.tel}}</div>-->
            <!--<div>{{item.province}}</div>-->
            <!--<div>{{item.city}}</div>-->
            <!--<div>{{item.area}}</div>-->
            <!--<div>{{item.strect}}</div>-->
        <!--</div>-->
        <!--<input placeholder="姓名"/>-->
        <!--<input placeholder="电话"/>-->
        <!--<input placeholder="省"/>-->
        <!--<input placeholder="市"/>-->
        <!--<input placeholder="区"/>-->
        <!--<input placeholder="街道"/>-->
        <!--<br/>-->
        <!--<input type="checkbox" value="设为默认" class="xx"/>-->
        <!--<br/>-->
        <!--<button>保存</button>-->
    <!--</div>-->
</template>

<script>
    // import {getSession} from "../assets/js/app";

    export default {
        name: "person-setting",
        data() {
            this.$router.push('/person-center/setting/admin_address');
            return {
            }
        },
        //生命周期钩子函数
        // created() {
        //     let uid_num = getSession('uid');
        //     this.axios.get(`/vue_user/vue_getaddress?uid=${uid_num}`)
        //         .then((response) => {
        //             // console.log(response.data.user_msg);
        //             if(response.data.status){
        //                 this.address = response.data.user_msg;
        //             }else {
        //                 alert('暂无数据');
        //             }
        //             //1.存session
        //             // setSession({key: "uid", value: response.data.data.id});
        //             //2.跳转页面
        //             // this.$router.push('/');
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }
    }
</script>

<style scoped lang="scss">
    input {
        height: 30px;
        width: 80vw;
        padding: 5px 15px;
        margin: 10px auto;
    }

    button {
        background-color: aqua;
        height: 50px;
        width: 120px;
    }

    .xx {
        width: 20px;
        height: 20px;
    }
</style>