<template>
    <div class="bgc-fff">
        <div class="header_box">
            <div class="back_button">
                <router-link to="/login">
                    <svg class="svg-sprite" style="width: 44px; height: 44px; fill: rgb(0, 0, 0);">
                        <use xlink:href="#svg-sprite-toolbar-btn-goback-auth">
                            <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-goback-auth" width="100%" height="100%">
                                <path d="M25.182 32.935L15.026 22.78a1.738 1.738 0 0 1 0-.597l10.156-10.156c.078-.034.299-.036.597 0l1.195 1.195c.034.312.035.537 0 .598l-8.364 8.363a.536.536 0 0 0 0 .597l8.364 8.364c.033.059.037.283 0 .597l-1.195 1.195c-.295.034-.518.036-.597 0z"
                                      fill="#7F0019" fill-rule="evenodd"></path>
                            </svg>
                        </use>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="login_title">
            注册<br/>商场账号
        </div>
        <div class="login_form">
            <form>
                <div class="login_account">
                    <input type="text" placeholder="输入手机号" v-model="tel"/>
                </div>
                <div class="login_password">
                    <input type="password" placeholder="输入密码" v-model="password"/>
                </div>
                <div class="login_button">
                    <button type="button" name="" id="" value="登录" @click="registerHandle">注册</button>
                    <!--<div class="mask_button">-->

                    <!--</div>-->
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {setSession} from "../assets/js/app"
    export default {
        name: "registered",
        data() {
            return {
                tel: "",
                password: ""
            }
        },
        methods: {
            registerHandle() {
                this.axios.post('/users/register/',{
                    username: this.tel,
                    password: this.password
                })
                    .then((response)=> {
                        // console.log(response);
                        //1.存session
                        setSession({key: "uid", value:response.data.data.id});
                        //2.跳转页面
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
    .header_box {
        width: 100vw;
    }

    .bgc-fff {
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