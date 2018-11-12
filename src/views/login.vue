<template>
    <div class="bgc-fff">
        <div class="shut_down">
            <div>
                <router-link to="/">
                <svg class="svg-sprite">
                    <use xlink:href="#svg-sprite-toolbar-btn-cancel-auth">
                        <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-cancel-auth" width="100%" height="100%">
                            <path d="M27.435 21.02l6.01-6.01 1.415 1.415-6.01 6.01 6.01 6.01-1.415 1.415-6.01-6.01-6.01 6.01-1.415-1.415 6.01-6.01-6.01-6.01 1.415-1.415 6.01 6.01z"
                                  fill="#7F0019" fill-rule="evenodd"></path>
                        </svg>
                    </use>
                </svg>
                </router-link>
            </div>
        </div>
        <div class="login_title">
            登录<br/>商场账号
        </div>
        <div class="login_form">
            <form>
                <div class="login_account">
                    <input type="text" placeholder="输入手机号" v-model="user_tel"/>
                </div>
                <div class="login_password">
                    <input type="password" placeholder="输入密码" v-model="user_password"/>
                    <div class="look_password">
                        <svg class="svg-sprite" style="width: 44px; height: 44px; fill: rgb(0, 0, 0);">
                            <use id="chan_pass">
                                <svg viewBox="0 0 44 44" id="svg-sprite-global-password-mask-on" width="100%"
                                     height="100%">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M11.803 27.112l8.678-8.678c1.31 1.08 2.157 2.114 2.157 2.114.763.787.752 2.102 0 2.904 0 0-3.733 4.548-7.638 4.548-1.107 0-2.2-.365-3.197-.888zm-1.725-1.105c-1.623-1.222-2.716-2.555-2.716-2.555-.763-.787-.752-2.102 0-2.904 0 0 3.733-4.548 7.638-4.548 1.348 0 2.675.541 3.835 1.25l-8.757 8.757z"
                                              fill="#ADADAD"></path>
                                        <path d="M15 27c-2.69 0-4.857-2.247-4.857-5s2.166-5 4.857-5c2.69 0 4.857 2.247 4.857 5S17.691 27 15 27zm0-2c1.57 0 2.857-1.335 2.857-3S16.57 19 15 19c-1.57 0-2.857 1.335-2.857 3S13.43 25 15 25z"
                                              fill="#F2F2F2" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 44 44" id="svg-sprite-global-password-mask-off" width="100%"
                                     height="100%">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M15 28c3.905 0 7.638-4.548 7.638-4.548.752-.802.763-2.117 0-2.904 0 0-3.733-4.548-7.638-4.548s-7.638 4.548-7.638 4.548c-.752.802-.763 2.117 0 2.904 0 0 3.733 4.548 7.638 4.548z"
                                              fill="#414141"></path>
                                        <path d="M15 27c-2.69 0-4.857-2.247-4.857-5s2.166-5 4.857-5c2.69 0 4.857 2.247 4.857 5S17.691 27 15 27zm0-2c1.57 0 2.857-1.335 2.857-3S16.57 19 15 19c-1.57 0-2.857 1.335-2.857 3S13.43 25 15 25z"
                                              fill="#F2F2F2" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                            </use>
                        </svg>
                    </div>
                </div>
                <div class="login_button">
                    <button type="button" name="" id="" value="登录" @click="login"> 登录</button>
                    <!--<div class="mask_button"></div>-->
                </div>
            </form>
        </div>
        <div class="jump_registration">
            <div  class="fl reg"><router-link to="/registered">新用户注册</router-link></div>
            <div class="fr change_pass"><router-link to="/registered">忘记密码</router-link></div>
        </div>
    </div>
</template>

<script>
    import {setSession} from "../assets/js/app"
    export default {
        name: "login",
        data(){
            return{
                user_tel:'',
                user_password:""
            }
        },
        methods:{
            login(){
                this.axios.post('/users/login/', {
                    username: this.user_tel,
                    password:this.user_password
                })
                    .then((response)=> {
                        // console.log(response.data.user_msg[0].id);
                        if(response.data.user_msg==''){
                            alert('没有该账号存在，请先注册');
                            this.$router.push('/registered');
                            return false;
                        }
                        // console.log(response);
                        // 1.存session
                        setSession({key: "uid", value:response.data.data.id});
                        // 2.跳转页面
                        this.$router.push('/');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        }
    }
</script>

<style scoped>
    .bgc-fff{
        background-color: #fff;
        width: 100vw;
        height: 100vh;
    }
    * {
        margin: 0px;
        padding: 0px;
    }

    input {
        user-select: none;
    }

    .shut_down {
        width: 44px;
        height: 44px;
    }

    .shut_down a svg {
        display: block;
        width: 44px;
        height: 44px;
        fill: rgb(0, 0, 0);
    }

    .login_title {
        color: #000;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: .94px;
        line-height: 28px;
        padding: 39px 36px 20px;
    }

    .login_account, .login_password, .login_button {
        width: 90vw;
        margin: 0 auto;
        position: relative;
    }

    .login_account input, .login_password input {
        background: #f2f2f2;
        border-radius: 22px;
        color: #000;
        font-size: 16px;
        line-height: 22px;
        padding: 11px 21px;
        border: 0 solid rgba(0, 0, 0, 0);
        display: block;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }

    .login_password, .login_button {
        margin: 20px auto 0;
    }

    .login_button {
        text-align: center;
    }

    .login_button button {
        background: #7f0019;
        border: 0 solid rgba(0, 0, 0, 0);
        border-radius: 22px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        min-height: 44px;
        display: block;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }

    .login_password .look_password {
        width: 44px;
        height: 44px;
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .jump_registration {
        width: 90vw;
        margin: 20px auto 0;
    }

    .jump_registration::after {
        content: "";
        display: block;
        clear: both;
    }

    .jump_registration a {
        display: block;
        font-size: 13px;
        line-height: 18px;
        color: #60b3fa;
        text-decoration: none;
    }

    .jump_registration .reg {
        padding-left: 20px;
        float: left;
    }

    .jump_registration .change_pass {
        padding-right: 20px;
        float: right;
    }

    .mask_button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }

</style>