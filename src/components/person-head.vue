<template>
    <div class="header-box">
        <p class="title">{{titleName}}</p>
        <div class="arrow-back" @click="goBack">
            <svg class="svg-sprite" style="width: 44px; height: 48px; fill: rgb(0, 0, 0);">
                <use xlink:href="#svg-sprite-toolbar-btn-goback">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-goback"
                         width="100%" height="100%">
                        <path d="M25.182 32.935L15.026 22.78a1.738 1.738 0 0 1 0-.597l10.156-10.156c.078-.034.299-.036.597 0l1.195 1.195c.034.312.035.537 0 .598l-8.364 8.363a.536.536 0 0 0 0 .597l8.364 8.364c.033.059.037.283 0 .597l-1.195 1.195c-.295.034-.518.036-.597 0z"
                              fill="#7F0019" fill-rule="evenodd"></path>
                    </svg>
                </use>
            </svg>
        </div>
        <div class="cart" v-if="!saveBtn && !other">
            <router-link to="/cartPage">
            <svg class="svg-sprite" style="width: 44px; height: 48px; fill: rgb(0, 0, 0);">
                <use xlink:href="#svg-sprite-toolbar-btn-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-cart"
                         width="100%" height="100%">
                        <path d="M14.364 12.19H32.93a1.5 1.5 0 0 1 1.433 1.943l-2.728 8.841a1.5 1.5 0 0 1-1.433 1.058h-13.86l.418 2.495a.5.5 0 0 0 .493.417h15.355v1H17.253a1.5 1.5 0 0 1-1.48-1.252l-2.636-15.774a.5.5 0 0 0-.493-.418H9.5v-1h3.144a1.5 1.5 0 0 1 1.48 1.253l.24 1.438zm.167 1l1.645 9.842h14.026a.5.5 0 0 0 .478-.353l2.728-8.84a.5.5 0 0 0-.478-.648h-18.4zm3.07 20.46a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                              fill="#000" fill-rule="nonzero"></path>
                    </svg>
                </use>
            </svg>
            </router-link>
        </div>
        <div class="save-btn" v-else-if="saveBtn && !other" @click="toAdd">
            <a href="javascript:void(0)">保存</a>
        </div>
        <div style="position: absolute;width: 0;height: 0;right: 0;" v-else-if="other"></div>
    </div>
</template>

<script>
    export default {
        name: "person-head",
        props:['titleName','saveBtn','other'],
        methods:{
            goBack:function(){
                this.$router.history.go(-1);
            },
            toAdd:function () {
                this.$emit('action');
            }
        }
    }
</script>

<style scoped>

    .header-box {
        /*position: relative;*/
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
        background: rgba(0, 0, 0, 0);
        border: none;
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 10000;
        border-bottom: .5px solid #b2b2b2;
        background: #f9f9f9;
        height: 48px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,.4);
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    .header-box .title{
        box-sizing: border-box;
        width: 100vw;
        padding-left: 72px;
        text-align: left;
        height: 48px;
        line-height: 48px;
    }
    .header-box .arrow-back {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 44px;
        width: 44px;
    }

    .header-box .arrow-back svg {
        display: block;
    }

    .header-box .cart {
        position: absolute;
        top: 0px;
        right: 6px;
        height: 44px;
        width: 44px;
    }

    .header-box .cart svg {
        display: block;
    }
    .header-box .save-btn{
        position: absolute;
        top: 0px;
        right: 0;
        width: 72px;
        height: 48px;
        line-height: 48px;

    }
    .header-box .save-btn a{
        font-size: 16px;
        color: #7f0019;
        letter-spacing: .77px;
        margin-right: 15px;
        text-align: right;
        font-weight: 500;
        text-decoration: none;
        display: block;
    }
</style>