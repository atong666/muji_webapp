<template>
    <div class="jiantou" v-on:click="back">
        <svg class="svg-sprite" style="width: 44px; height: 44px; fill: rgb(0, 0, 0);">
            <use xlink:href="#svg-sprite-toolbar-btn-goback">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-goback"
                     width="100%" height="100%">
                    <path d="M25.182 32.935L15.026 22.78a1.738 1.738 0 0 1 0-.597l10.156-10.156c.078-.034.299-.036.597 0l1.195 1.195c.034.312.035.537 0 .598l-8.364 8.363a.536.536 0 0 0 0 .597l8.364 8.364c.033.059.037.283 0 .597l-1.195 1.195c-.295.034-.518.036-.597 0z"
                          fill="#7F0019" fill-rule="evenodd"></path>
                </svg>
            </use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "return-up",
        methods: {
            back() {
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>

<style scoped lang="scss">
    .jiantou {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 44px;
        width: 44px;
    }
</style>