<template>
    <div class="shop_car">
        <router-link to="/shopcar" class="icon-a">
        <svg class="svg-sprite" style="width: 44px; height: 44px; fill: rgb(0, 0, 0);">
            <use xlink:href="#svg-sprite-toolbar-btn-cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="svg-sprite-toolbar-btn-cart" width="100%" height="100%">
                    <path d="M14.364 12.19H32.93a1.5 1.5 0 0 1 1.433 1.943l-2.728 8.841a1.5 1.5 0 0 1-1.433 1.058h-13.86l.418 2.495a.5.5 0 0 0 .493.417h15.355v1H17.253a1.5 1.5 0 0 1-1.48-1.252l-2.636-15.774a.5.5 0 0 0-.493-.418H9.5v-1h3.144a1.5 1.5 0 0 1 1.48 1.253l.24 1.438zm.167 1l1.645 9.842h14.026a.5.5 0 0 0 .478-.353l2.728-8.84a.5.5 0 0 0-.478-.648h-18.4zm3.07 20.46a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#000" fill-rule="nonzero"></path>
                </svg>
            </use>
        </svg>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "car-icon",

    }
</script>

<style scoped lang="scss">
    .shop_car{
        position: absolute;
        top: 0px;
        right: 6px;
        height: 44px;
        width: 44px;
    }
</style>