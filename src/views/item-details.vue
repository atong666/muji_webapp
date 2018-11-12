<template>
    <div>
        <title-head :me_name="name"></title-head>
        <div class="xx_box">
            <swiper-three></swiper-three>
            <div class="item_msg">
                <p style="margin-bottom: 5px">商品编号：{{bianhao}}</p>
                <p v-html="item_nes"></p>
            </div>
            <div class="item_canshu">
                <div class="cont" @click="popupVisible=!popupVisible">
                    产品参数
                </div>
            </div>
            <div class="item_canshu_res">
                <div class="table_box">
                    <table border="1">
                        <tr style="background-color: #f2f2f2;">
                            <td>尺码</td>
                            <td>衣长</td>
                            <td>肩宽</td>
                            <td>胸围</td>
                            <td>腰围</td>
                            <td>下围宽</td>
                            <td>袖长</td>
                            <td>袖长（领中央至袖口长度）</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f2f2f2;">男式_XS</td>
                            <td>65.0cm</td>
                            <td>39.0cm</td>
                            <td>94.0cm</td>
                            <td>94.0cm</td>
                            <td>94.0cm</td>
                            <td>21.0cm</td>
                            <td>21.0cm</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f2f2f2;">男式_S</td>
                            <td>67.0cm</td>
                            <td>41.0cm</td>
                            <td>98.0cm</td>
                            <td>98.0cm</td>
                            <td>98.0cm</td>
                            <td>22.0cm</td>
                            <td>22.0cm</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f2f2f2;">男式_M</td>
                            <td>69.0cm</td>
                            <td>43.0cm</td>
                            <td>102.0cm</td>
                            <td>102.0cm</td>
                            <td>102.0cm</td>
                            <td>23.0cm</td>
                            <td>23.0cm</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f2f2f2;">男式_L</td>
                            <td>71.0cm</td>
                            <td>45.0cm</td>
                            <td>106.0cm</td>
                            <td>106.0cm</td>
                            <td>106.0cm</td>
                            <td>23.0cm</td>
                            <td>23.0cm</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f2f2f2;">男式_XL</td>
                            <td>71.0cm</td>
                            <td>47.0cm</td>
                            <td>112.0cm</td>
                            <td>112.0cm</td>
                            <td>112.0cm</td>
                            <td>23.0cm</td>
                            <td>23.0cm</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="xiangqing_foot">
            <button @click="add_car1">加入购物车</button>
            <button @click="add_car2">立即购买</button>
        </div>
        <mt-popup
                v-model="popupVisible"
                position="bottom">
            <div class="popup1_box">
                <div class="popup1_title">
                    产品参数
                </div>

                <div class="popup1_cont">
                    <div class="cont">
                        <div class="item_line">
                            <div class="line_label">商品名称</div>
                            <div class="line_value">棉V领短袖T恤_厚款T恤_2件装</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">颜色</div>
                            <div class="line_value">米白色 黑色</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">尺码</div>
                            <div class="line_value">男式_XS/男式_S/男式_M/男式_L/男式_XL</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">性别</div>
                            <div class="line_value">男</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">原产地</div>
                            <div class="line_value">中国</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">素材</div>
                            <div class="line_value">主体:棉100%,领子:棉92%,聚酯纤维8%</div>
                            <div class="clear"></div>
                        </div>
                        <div class="item_line lin">
                            <div class="line_label">注意事项</div>
                            <div class="line_value">
                                ●穿着和洗涤会使印花部分开裂。●请勿摩擦、搓揉印花部分。●请勿熨烫印花部分。●由于材质的特性，穿着和使用会使成品发生纬斜。●整理后轻轻熨烫会一定程度得到恢复。
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="popup1_foot">
                    <button @click="popupVisible=!popupVisible">确定</button>
                </div>
            </div>
        </mt-popup>
        <mt-popup
                v-model="popupVisible1"
                position="bottom">
            <div class="item_car_box">
                <div class="icon_box">
                    <div class="img_box">
                        <img src="../assets/4550002512156_400.jpg"/>
                    </div>
                    <div class="text_box">
                        <div>
                            <div class="title">
                                棉高密度_无领衬衫
                            </div>
                            <div class="price">
                                ¥678
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="part-options-options">
                <div class="yanse">
                    <div class="yanse_left">颜色</div>
                    <div class="yanse_right">
                        <button :class="{ active1: isActive1==1 }" @click="isActive1=1">米白色</button>
                        <button :class="{ active1: isActive1==2 }" @click="isActive1=2">军绿色</button>
                        <button :class="{ active1: isActive1==3 }" @click="isActive1=3">黑色</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="yanse" style="margin-top: 25px">
                    <div class="yanse_left">尺码</div>
                    <div class="yanse_right">
                        <button :class="{ active1: isActive2==1 }" @click="isActive2=1">
                            男式_S-M
                        </button>
                        <button :class="{ active1: isActive2==2 }" @click="isActive2=2">
                            男式_L-XL
                        </button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="yanse" style="margin-top: 25px">
                    <div class="yanse_left">尺码</div>
                    <div class="yanse_right">
                        <div class="less" @click="numxx--">
                            -
                        </div>
                        <div class="numm">{{numxx}}</div>
                        <div class="add" @click="numxx++">
                            +
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="car_foot">
                <div class="btn" @click="queding">确定</div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import TitleHead from "../components/title-head";
    import SwiperThree from "../components/swiper-three";
    import { Toast } from 'mint-ui'

    export default {
        name: "item-details",
        components: {SwiperThree, TitleHead},
        data() {
            return {
                name: '',
                bianhao: '4550002512064',
                item_nes: "采用重磅低支粗纱线织成，<br/>质感粗松，<br/>穿着舒适惬意。",
                popupVisible: false,
                popupVisible1: false,
                isActive1: 1,
                isActive2: 1,
                numxx: 1,
                isBtn: true
            }
        },
        methods: {
            add_car1() {
                    this.isBtn = true;
                    this.popupVisible1 = !this.popupVisible1;
            },
            add_car2() {
                this.popupVisible1 = !this.popupVisible1;
                this.isBtn = false;
            },
            queding(){
                if (this.isBtn){
                    this.popupVisible1 = !this.popupVisible1;
                    Toast('加入购物车成功');
                }else {
                    this.popupVisible1 = !this.popupVisible1;
                    this.$router.push({ path: 'shopcar' });
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .active1 {
        border-color: #7f0019 !important;
        color: #7f0019 !important;
    }

    .car_foot {
        padding: 4vw;
        .btn {
            width: 100%;
            min-height: 44px;
            border: 0 solid rgba(0, 0, 0, 0);
            background: #7f0019;
            font-size: 16px;
            color: #fff;
            font-weight: 700;
            line-height: 44px;
            border-radius: 22px;
            cursor: pointer;
            text-align: center;
        }
    }

    .part-options-options {
        padding: 10px 19px 15px 30px;
        .yanse {
            .yanse_left {
                width: 46px;
                padding-top: 4px;
                padding-bottom: 4px;
                font-size: 14px;
                line-height: 20px;
                color: #000;
                font-weight: 500;
                height: 42px;
                box-sizing: border-box;
                float: left;
            }
            .yanse_right {
                float: left;
                height: 42px;
                box-sizing: border-box;
                button {
                    display: inline-block;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #999;
                    border-radius: 14px;
                    overflow: hidden;
                    min-width: 60px;
                    padding: 4px 15px;
                    font-size: 12px;
                    line-height: 18px;
                    color: #585858;
                    text-align: center;
                    background-color: #fff;
                }
                .less {
                    box-sizing: border-box;
                    width: 28px;
                    height: 28px;
                    color: #999;
                    border-top-left-radius: 14px;
                    border-bottom-left-radius: 14px;
                    display: block;
                    border: 1px solid #999;
                    padding: 4px;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                    float: left;
                }
                .add {
                    box-sizing: border-box;
                    width: 28px;
                    height: 28px;
                    color: #999;
                    border-top-right-radius: 14px;
                    border-bottom-right-radius: 14px;
                    display: block;
                    border: 1px solid #999;
                    padding: 4px;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                    float: left;
                }
                .numm {
                    box-sizing: border-box;
                    width: 48px;
                    display: block;
                    height: 28px;
                    color: #999;
                    border-bottom: 1px solid #999;
                    border-top: 1px solid #999;
                    padding: 4px;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                    float: left;
                }
            }
        }
    }

    .item_car_box {
        background-color: #fff;
        width: 100vw;
        .icon_box {
            padding: 20px 4vw;
            .img_box {
                float: left;
                height: 120px;
                width: 120px;
                margin-right: 25px;
                img {
                    width: 100%;
                    display: block;
                }
            }
            .text_box {
                float: left;
                display: flex;
                align-items: center;
                width: 186px;
                height: 120px;
                .title {
                    font-size: 12px;
                    line-height: 17px;
                    color: #030303;
                    letter-spacing: -.14px;
                    width: 100%;
                }
                .price {
                    font-size: 13px;
                    line-height: 22px;
                    color: #030303;
                    letter-spacing: -.15px;
                    font-weight: 500;
                    width: 100%;
                }
            }
        }
    }

    .item_msg {
        padding: 24px 4vw 18px;
        font-size: 13px;
        line-height: 18px;
        color: #000;
    }

    .item_canshu {
        padding: 9px 4vw;
        background-color: #fff;
        .cont {
            padding-top: 11px;
            padding-bottom: 11px;
            padding-right: 16px;
            background-color: rgba(0, 0, 0, 0);
            background-image: url(../assets/muji_jiantou_right.svg);
            background-repeat: no-repeat;
            background-position: 100%;
            font-size: 16px;
            line-height: 16px;
            color: #000;
        }
    }

    .xx_box {
        padding-bottom: 60px;
    }

    .item_canshu_res {
        border-top: 5px solid #f2f2f2;
        padding: 9px 4vw;
        background-color: #fff;
        .table_box {
            width: 100%;
            overflow-x: scroll;
            margin: 20px 0px;
            text-align: center;
            table {
                user-select: none;
                margin-left: auto;
                margin-right: auto;
                border-collapse: collapse;
                /*display: table;*/
                border-spacing: 2px;
                border-color: grey;
                width: 587px;
                height: 199px;
                font-size: 13px;
                line-height: 18px;
                color: #000;
            }
        }
    }

    .xiangqing_foot {
        padding: 15px;
        background-color: #fff;
        position: fixed;
        bottom: 0px;
        text-align: center;
        z-index: 1111;
        width: 100vw;
        box-sizing: border-box;
        button {
            width: 133px;
            min-height: 44px;
            border: 0 solid rgba(0, 0, 0, 0);
            background: #7f0019;
            font-size: 16px;
            color: #fff;
            font-weight: 700;
            line-height: 22px;
            border-radius: 22px;
            cursor: pointer;
            margin: 0 10px;
        }
    }

    .popup1_box {
        width: 100vw;
        height: 507.5px;
        background-color: #fff;
        .popup1_title {
            padding: 12px;
            border-bottom: .5px solid #bcbbc1;
            font-size: 18px;
            line-height: 25px;
            color: #000;
            text-align: center;;
        }
        .popup1_cont {
            height: 384px;
            width: 100vw;
            overflow-y: scroll;
            .cont {
                padding-left: 15px;
                .item_line {
                    padding-top: 11px;
                    padding-bottom: 11px;
                    padding-right: 15px;
                    .line_label {
                        float: left;
                        width: 90px;
                        font-size: 15px;
                        line-height: 21px;
                        color: #999;
                    }
                    .line_value {
                        float: right;
                        width: 240px;
                        font-size: 15px;
                        line-height: 21px;
                        color: #000;
                    }
                }
                .lin {
                    border-top: .5px solid #e5e5e5;
                }
            }
        }
        .popup1_foot {
            padding: 15px;
            box-sizing: border-box;
            width: 100%;
            button {
                width: 100%;
                min-height: 44px;
                border: 0 solid rgba(0, 0, 0, 0);
                background: #7f0019;
                font-size: 16px;
                color: #fff;
                font-weight: 700;
                line-height: 22px;
                border-radius: 22px;
                cursor: pointer;
                display: block;
            }
        }
    }
</style>