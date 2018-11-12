<template>
    <div>
        <div class="hrader_box">
            购物车
            <return-up></return-up>
        </div>
        <div class="cart">
            <div class="nothing-box" style="display: none">
                <div class="nothing-inner">
                    &nbsp;购物车是空的&nbsp;
                </div>
            </div>
            <div class="cart-box">
                <ul class="cart-list">
                    <car-card></car-card>
                </ul>
            </div>
        </div>
        <div class="settlement-detail">
            <div class="inner-box">
                <div class="detail-list">
                    <div class="all-select">
                        <label>
                            <svg class="svg-sprite svg-show" style="width: 14px; height: 14px; fill: rgb(0, 0, 0);">
                                <use xlink:href="#svg-sprite-global-checkbox2-true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"
                                         id="svg-sprite-global-checkbox2-true" width="100%" height="100%">
                                        <g fill="none" fill-rule="evenodd">
                                            <circle fill="#7F0019" cx="7" cy="7" r="7"></circle>
                                            <path d="M6.536 9.071l4.242-4.243.707.708-4.242 4.242-.707.707L3 6.95l.707-.707L6.536 9.07z"
                                                  fill="#FFF"></path>
                                        </g>
                                    </svg>
                                </use>
                            </svg>
                            <svg class="svg-sprite svg-hidden" style="width: 14px; height: 14px; fill: rgb(0, 0, 0);">
                                <use xlink:href="#svg-sprite-global-checkbox2-false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"
                                         id="svg-sprite-global-checkbox2-false" width="100%" height="100%">
                                        <path d="M7 13.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm0-1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                                              fill="#999" fill-rule="nonzero"></path>
                                    </svg>
                                </use>
                            </svg>
                            <span>全选</span>
                        </label>
                        <span class="goods-number">
                    <span class="sum-number">0</span>
                    件商品
                </span>
                    </div>
                    <div class="sum-price">
                        合计：
                        <span class="red-text">
                    ¥0.00
                </span>
                    </div>
                </div>
                <button class="settlement-btn" type="button">
                    去结算
                </button>
            </div>
        </div>
        <div class="mask-changeNum" style="display: none">
            <div class="mask-box"></div>
            <div class="content-box">
                <div class="goods-detail">
                    <div class="img-box">
                        <img src="img/cart/goods01.jpg">
                    </div>
                    <div class="text-box">
                        <div class="title">
                            凝胶墨水笔替换芯_0.5
                        </div>
                        <div class="price">
                            ¥8
                        </div>
                    </div>
                </div>
                <div class="options">
                    <div class="inner-box">
                        <div class="title">
                            数量
                        </div>
                        <div class="number-change">
                            <a href="javascript:void(0)" class="subtract">-</a>
                            <input type="number" value="1">
                            <a href="javascript:void(0)" class="plus">+</a>
                        </div>
                    </div>
                </div>
                <div class="change-btn-box">
                    <button type="button" class="change-btn">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import returnUp from '../components/return-up'
    import CarCard from "../components/car-card";
    export default {
        name: "shopcar",
        components:{
            CarCard,
            returnUp
        }
    }
</script>

<style scoped>
    .hrader_box{
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
        background: rgba(0,0,0,0);
        border: none;
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 10000;
        border-bottom: .5px solid #b2b2b2;
        background: #f9f9f9;
    }
    .cart {
        margin-top: 48px;
        background-color: #f2f2f2;
        margin-bottom: 10px;
    }

    .cart .nothing-box {
        padding-top: 12.44378vh;
        padding-bottom: 12.44378vh;
        color: #1f1f21;
    }

    .cart .nothing-box .nothing-inner {
        font-size: 14px;
        line-height: 24px;
        color: #585858;
        text-align: center;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }

    .cart .nothing-box .nothing-inner::before {
        content: '';
        height: 1px;
        width: 21px;
        background: #585858;
        vertical-align: middle;
        display: inline-block;
    }

    .cart .nothing-box .nothing-inner::after {
        content: '';
        height: 1px;
        width: 21px;
        background: #585858;
        vertical-align: middle;
        display: inline-block;
    }

    .cart .cart-box {
        padding: 30px 0;
        background-color: #ffffff;
    }

    .cart .cart-box .cart-list {

    }
    .settlement-detail {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        z-index: 5;
    }

    .settlement-detail .inner-box {
        border-top: .5px solid #b2b2b2;
        padding: 10px 15px 15px;
        background: #fff;
    }

    .settlement-detail .inner-box .detail-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 11px;
        color: #000000;
        font-size: 16px;
        line-height: 22px;
        font-family: Roboto, Noto, sans-serif;
    }

    .settlement-detail .inner-box .detail-list .all-select {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .settlement-detail .inner-box .detail-list .all-select label {
        padding-right: 15px;
    }

    .settlement-detail .inner-box .detail-list .sum-price .red-text {
        color: #c72a1c;
    }

    .settlement-detail .inner-box .settlement-btn {
        -webkit-border-radius: 22px;
        -moz-border-radius: 22px;
        border-radius: 22px;
        background-color: #7f0019;
        color: #ffffff;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        height: 44px;
        width: 100%;
        font-family: Roboto, Noto, sans-serif;
    }

    .mask-changeNum {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

    .mask-changeNum .mask-box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
    }

    .mask-changeNum .content-box {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: #ffffff;
    }

    .mask-changeNum .content-box .goods-detail {
        padding: 20px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mask-changeNum .content-box .goods-detail .img-box {
        flex-grow: 0;
        width: 120px;
    }

    .mask-changeNum .content-box .goods-detail .img-box img {
        height: 120px;
        margin-right: 25px;
    }

    .mask-changeNum .content-box .goods-detail .text-box {
        flex-grow: 1;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .mask-changeNum .content-box .goods-detail .text-box .title {
        font-size: 12px;
        line-height: 17px;
        color: #030303;
    }

    .mask-changeNum .content-box .goods-detail .text-box .price {
        font-size: 13px;
        line-height: 22px;
        color: #030303;
        font-weight: 500;
        margin-top: 4px;
    }

    .mask-changeNum .content-box .options {
        padding: 10px 19px 15px 30px;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .mask-changeNum .content-box .options .title {
        width: 46px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 14px;
        line-height: 20px;
        color: #000;
        font-weight: 500;
        flex-grow: 0;
    }

    .mask-changeNum .content-box .options .inner-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .mask-changeNum .content-box .options .inner-box .number-change {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-grow:1;
    }

    .mask-changeNum .content-box .options .inner-box .number-change a {
        display: block;
        float: left;
        border: 1px solid #999;
        width: 28px;
        padding: 4px;
        border-radius: 0;
        font-size: 14px;
        line-height: 18px;
        color: #999999;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
    }

    .mask-changeNum .content-box .options .inner-box .number-change .subtract {
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
        border-right-width: 0;
    }
    .mask-changeNum .content-box .options .inner-box .number-change input{
        width: 48px;
        margin: 0;
        padding: 4px 10px;
        height: 28px;
        border: 1px solid #999;
        border-radius: 0;
        background: #fff;
        font-size: 12px;
        line-height: 18px;
        color: #585858;
        text-align: center;
        box-sizing: border-box;
        /*-webkit-appearance: none;*/
    }
    .mask-changeNum .content-box .options .inner-box .number-change .plus {
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
        border-left-width: 0;
    }
    .mask-changeNum .content-box .change-btn-box{
        padding: 15px;
    }
    .mask-changeNum .content-box .change-btn-box .change-btn{
        width: 100%;
        min-height: 44px;
        border: 0 solid rgba(0,0,0,0);
        background: #7f0019;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        line-height: 22px;
        border-radius: 22px;
        cursor: pointer;
        outline: none;
    }
</style>