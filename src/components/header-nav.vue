<template>
    <div class="header_box" id="head_box">
        <!--查询图标-->
        <router-link to="/search" class="icon-a">
            <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-search" width="100%" height="100%">
                <g fill="#000" fill-rule="nonzero">
                    <path d="M19 28a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
                    <path d="M27.172 27.879l4.95 4.95.706-.708-4.95-4.95-.706.708zm-.708-.707L24.5 25.207l.707-.707 1.965 1.964.707-.707 6.364 6.364-2.122 2.122-6.364-6.364.707-.707z"></path>
                </g>
            </svg>
        </router-link>
        <!--分类图标-->
        <router-link to="/classify" class="icon-a">
        <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-catalogs" width="100%" height="100%">
            <path d="M11.5 11.5v8h8v-8h-8zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm13 1v8h8v-8h-8zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm-13 14v8h8v-8h-8zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm13 1v8h8v-8h-8zm0-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
                  fill="#000" fill-rule="nonzero"></path>
        </svg>
        </router-link>
        <!--消息图标-->
        <router-link to="/person-msg" class="icon-a">
        <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-notifications" width="100%" height="100%">
            <path d="M13.945 32.5H22c6.36 0 11.5-4.934 11.5-11s-5.14-11-11.5-11-11.5 4.934-11.5 11c0 2.854 1.14 5.537 3.155 7.568l.29.293V32.5zm8.055 1h-9.055v-3.727C10.81 27.62 9.5 24.707 9.5 21.5c0-6.627 5.596-12 12.5-12s12.5 5.373 12.5 12-5.596 12-12.5 12zm-5.5-14h11v-1h-11v1zm0 6h11v-1h-11v1z"
                  fill="#000" fill-rule="nonzero"></path>
        </svg>
        </router-link>
        <!--购物车图标-->
        <router-link to="/shopcar" class="icon-a">
        <svg viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-cart" width="100%" height="100%">
            <path d="M14.364 12.19H32.93a1.5 1.5 0 0 1 1.433 1.943l-2.728 8.841a1.5 1.5 0 0 1-1.433 1.058h-13.86l.418 2.495a.5.5 0 0 0 .493.417h15.355v1H17.253a1.5 1.5 0 0 1-1.48-1.252l-2.636-15.774a.5.5 0 0 0-.493-.418H9.5v-1h3.144a1.5 1.5 0 0 1 1.48 1.253l.24 1.438zm.167 1l1.645 9.842h14.026a.5.5 0 0 0 .478-.353l2.728-8.84a.5.5 0 0 0-.478-.648h-18.4zm3.07 20.46a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  fill="#000" fill-rule="nonzero"></path>
        </svg>
        </router-link>
        <!--用户图标-->
        <svg viewBox="0 0 77 77" id="svg-sprite-account-default-avatar" width="100%" height="100%" class="user_icon"
             @click="look_uesr">
            <g fill="none" fill-rule="evenodd">
                <circle fill="#D8D8D8" cx="38.5" cy="38.5" r="38.5"></circle>
                <path d="M10.967 65.41c6.566-3.757 17.737-5.865 19.53-10.628.24-2.623.149-4.452.149-6.849-1.204-.625-3.443-4.599-3.806-7.953-.945-.077-2.434-.988-2.871-4.586-.235-1.932.7-3.018 1.27-3.36-3.197-12.155-1.438-22.77 13.14-23.035 3.644 0 6.45.962 7.544 2.863 10.64 1.462 7.444 15.6 5.907 20.172.57.342 1.504 1.428 1.27 3.36-.437 3.598-1.927 4.509-2.873 4.586-.363 3.354-2.515 7.328-3.718 7.953 0 2.397-.245 4.226-.005 6.849 1.792 4.764 12.961 6.87 19.529 10.629C59.043 72.56 49.29 77 38.5 77c-10.79 0-20.543-4.439-27.533-11.59z"
                      fill="#585858"></path>
            </g>
        </svg>
        <div class="zhanghao_card" v-show="uesr_card">
            <router-link  to="/person-center" class="zhang">账号详情</router-link>
            <router-link to="/login" class="tuichu">退出</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-nav",
        data() {
            return {
                uesr_card: false
            }
        },
        methods: {
            look_uesr() {
                this.uesr_card = !this.uesr_card;
            }
        }
    }
</script>

<style scoped lang="scss">
    .header_box {
        position: fixed;
        top: 0px;
        left: 0px;
        background: #f9f9f9;
        border-bottom: 0.5px solid #b2b2b2;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        z-index: 1000;
        .icon-a{
            height: 44px;
        }
        .user_icon {
            width: 25px !important;
            height: 25px !important;
            margin-left: 10px;
            margin-right: 20px;
        }
        .zhanghao_card {
            width: 104px;
            border: 1px solid #c6c6c6;
            padding: 0 6px;
            background: #fff;
            position: absolute;
            top: 95%;
            right: -5px;
            .zhang {
                display: block;
                padding: 8px 10px;
                font-size: 12px;
                line-height: 17px;
                color: #7f0019;
                text-align: left;
                text-decoration: none;
            }
            .tuichu {
                border-top: 1px dashed #e8e8e8;
                display: block;
                padding: 8px 10px;
                font-size: 12px;
                line-height: 17px;
                color: #999;
                text-align: left;
                text-decoration: none;
            }
        }
    }


</style>