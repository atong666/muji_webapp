<template>
    <div class="bg-box">
        <person-head :me_name="me_name"></person-head>
        <ul class="set-list">
            <li class="set-item">
                <div class="item-title">
                    用户信息
                </div>
                <div class="item-content">
                    <div class="inner-content">
                        <div class="content-title">
                            生日 / 性别
                        </div>
                    </div>
                </div>
            </li>
            <li class="set-item">
                <div class="item-title">
                    地址管理
                </div>
                <div class="item-content" @click="adminAddress">
                    <div class="inner-content">
                        <div class="content-title">
                            我的收货地址
                        </div>
                    </div>
                </div>
            </li>
            <li class="set-item">
                <div class="item-title">
                    账户与安全
                </div>
                <div class="item-content">
                    <div class="inner-content">
                        <div class="content-title">
                            设置登录密码
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="exit-login">
            <div class="exit-box">
                <button class="exit-btn" type="button">
                    退出登录
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import personHead from '../components/title-head';

    export default {
        name: "person-set",
        components: {
            personHead
        },
        data: function () {
            return {
                titleName: '设置',
                ttrue: true,
                ffalse: false,
                me_name: '设置'
            }
        },
        methods: {
            adminAddress: function () {
                this.$router.push('/person-center/setting/admin_address');
            }
        }
    }
</script>

<style scoped>
    .bg-box {
        background-color: #f2f2f2;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 48px;
    }

    .set-list .set-item {
        margin-top: 30px;
        /*background-color: #ffffff;*/
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .set-list .set-item:first-child {
        margin-top: 14px;
    }

    .set-list .set-item .item-title {
        padding: 0 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 48px;
        height: 48px;
        font-size: 20px;
        color: #030303;
        letter-spacing: -.15px;
        font-weight: 900;
    }

    .set-list .set-item .item-content {
        padding-left: 16px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #ffffff;
    }

    .set-list .set-item .item-content .inner-content {
        background-image: url(../assets/arrow-right.svg);
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: 34px 34px;
        padding: 11px 0 10px;
    }

    .set-list .set-item .item-content .inner-content .content-title {
        text-align: left;
        font-size: 14px;
        color: #000;
        line-height: 22px;
        letter-spacing: -.34px;
    }

    .exit-login {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
    }

    .exit-login .exit-box {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 15px;
    }

    .exit-login .exit-box .exit-btn {
        width: 100%;
        min-height: 44px;
        background: #7f0019;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        line-height: 22px;
        border-radius: 22px;
        display: block;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
        outline: none;
    }
</style>