<template>
    <li class="cart-item">
        <div class="check-btn">
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
            <input type="checkbox" checked="true">
        </div>
        <div class="item-pic">
            <img src="../assets/goods01.jpg">
        </div>
        <div class="item-detail">
            <div class="title">
                凝胶墨水笔替换芯_0.5
            </div>
            <div class="options">
                颜色：黑色、尺码：0.5ｍｍ/黒
            </div>
            <div class="price-number">
                <div class="price">
                    ¥<span>8</span>
                </div>
                <div class="number">
                    数量1
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "car-card"
    }
</script>

<style scoped>
     .cart-item {
        margin-top: 30px;
        padding: 10px 15px 10px 2px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

     .cart-item:first-child {
        margin-top: 0;
    }

     .cart-item .check-btn {
        padding: 0 13px;
        width: 14px;
        flex-grow: 0;
        height: 74px;
    }

    .cart-item .check-btn {
        line-height: 74px;
    }

    .cart-item .item-pic {
        width: 110px;
        flex-grow: 0;
        margin-right: 10px;
    }

     .cart-item .item-pic img {
        margin: 0 auto;
        height: 110px;
        max-width: 100%;
    }

    .cart-item .item-detail {
        flex-grow: 1;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }

    .cart-item .item-detail .title {
        font-size: 12px;
        color: #030303;
        line-height: 17px;
    }

     .cart-item .item-detail .options {
        font-size: 12px;
        line-height: 18px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 4px;
    }

    .cart-item .item-detail .price-number {
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 22px;
        color: #000;
        font-size: 13px;
        font-weight: 400;
    }

     .cart-item .check-btn input {
        display: none;
    }

     .cart-item .item-detail .price-number .price span {
        font-size: 16px;
        font-weight: 500;
    }

     .cart-item .item-detail .price-number .number {
        width: 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 7px 32px 7px 13px;
        background-color: #f2f2f2;
        background-image: url(../assets/arrow-up.svg);
        background-position: 100%;
        background-size: 32px 32px;
        background-repeat: no-repeat;
        border-radius: 16px;
        font-size: 12px;
        color: #585858;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>