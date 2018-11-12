<template>
    <div id="app">
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    .fl{
        float: left;
    }
    button{
        outline: none;
    }
    a{
        text-decoration: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    * {
        margin: 0px;
        padding: 0px;
    }

    html,
    body {
        background-color: #f2f2f2;
    }

    ul li {
        list-style: none;
    }

    .clear {
        clear: both;
    }

    svg {
        width: 44px;
        height: 44px;
    }
    .svg-show {
        display: inline-block;
    }

    .svg-hidden {
        display: none;
    }
</style>
