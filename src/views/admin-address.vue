<template>
    <div class="bg-box">
        <person-head :me_name="me_name"></person-head>
        <div class="address-box">
            <div class="no-address" style="display: none">
                &nbsp;尚未添加收货地址&nbsp;
            </div>
            <ul class="address-list">
                <li class="address-item" v-for="(item,index) in addressList" :key="index">
                    <div class="inner-box">
                        <div class="name">
                            {{item.name}}
                        </div>
                        <div class="body">
                            <div class="text">
                                联系方式：{{item.tel}}<br>
                                详细地址：<span class="area">&nbsp;{{item.province}}&nbsp;{{item.city}}&nbsp;{{item.area}}&nbsp;</span>{{item.street}}
                            </div>
                        </div>
                        <div class="actions">
                            <a class="default-btn" href="javascript:void(0)" v-if="item.isDefault=='1'">
                                <svg class="svg-sprite" style="width: 17px; height: 17px; fill: rgb(0, 0, 0);vertical-align: middle">
                                    <use xlink:href="#svg-sprite-global-checkbox-true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="svg-sprite-global-checkbox-true" width="100%" height="100%">
                                            <path d="M7.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 4a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="#7F0019" fill-rule="nonzero">
                                            </path>
                                        </svg>
                                    </use>
                                </svg>
                                默认地址
                            </a>
                            <a class="default-btn default-btn-black" href="javascript:void(0)" v-else-if="item.isDefault=='0'">
                                <svg class="svg-sprite" style="width: 17px; height: 17px; fill: rgb(0, 0, 0);vertical-align: middle">
                                    <use xlink:href="#svg-sprite-global-checkbox-false">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="svg-sprite-global-checkbox-false" width="100%" height="100%">
                                            <path d="M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0 1a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="#999" fill-rule="nonzero">
                                            </path>
                                        </svg>
                                    </use>
                                </svg>
                                设为默认地址
                            </a>
                            <div class="operation">
                                <a href="javascript:void(0)"  @click="xie_address()">
                                    <svg class="svg-sprite" style="width: 17px; height: 17px; fill: rgb(0, 0, 0);vertical-align: middle">
                                        <use xlink:href="#svg-sprite-global-edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" id="svg-sprite-global-edit" width="100%" height="100%">
                                                <g fill="#585858" fill-rule="evenodd">
                                                    <path d="M14.163 3.556l-1.236-1.235a1.115 1.115 0 0 0-.789-.316c-.3 0-.588.115-.788.316l-.003.002-1.007 1.185-5.376 5.15a.032.032 0 0 0-.01.021l-.356 3.087a.036.036 0 0 0 .013.03l.17.15a.035.035 0 0 0 .024.009h.005l3.005-.41a.035.035 0 0 0 .022-.01l5.14-5.386 1.183-.967.003-.002c.207-.208.326-.504.326-.812 0-.308-.12-.604-.326-.812zm-.56 1.02l-.69.692-1.694-1.695.69-.691a.323.323 0 0 1 .458 0l1.235 1.235a.326.326 0 0 1 0 .46zM5.53 11.02l.08-1.323 1.22 1.22-1.3.103zm.444-2.079l4.756-4.734 1.55 1.55-4.726 4.763-1.58-1.579z">
                                                    </path>
                                                    <path d="M13.051 7.157a.39.39 0 0 0-.387.4v4.817c0 .47-.365.852-.815.852H4.275c-.226 0-.478-.096-.676-.256-.207-.168-.326-.385-.326-.596V4.788c0-.447.534-.957 1.002-.957h4.078c.225 0 .401-.17.401-.387a.39.39 0 0 0-.4-.387H4.274c-.995 0-1.775.76-1.775 1.73v7.587c0 .466.185.886.522 1.182.325.287.77.444 1.253.444h7.574c.478 0 .88-.154 1.162-.446.28-.288.427-.696.427-1.18V7.558a.39.39 0 0 0-.387-.401">
                                                    </path>
                                                </g>
                                            </svg>
                                        </use>
                                    </svg>
                                    编辑
                                </a>
                                <a href="javascript:void(0)" @click="remove_address(item)" >
                                    <svg class="svg-sprite" style="width: 17px; height: 17px; fill: rgb(0, 0, 0);vertical-align: middle;">
                                        <use xlink:href="#svg-sprite-global-trash">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" id="svg-sprite-global-trash" width="100%" height="100%">
                                                <path d="M9.784 11.914a.428.428 0 0 1-.428-.428V6.779a.428.428 0 1 1 .857 0v4.707a.428.428 0 0 1-.429.428zm-2.57 0a.428.428 0 0 1-.429-.428V6.779a.428.428 0 1 1 .857 0v4.707a.428.428 0 0 1-.429.428zm6.855-7.274h-2.142v-.856c0-.708-.572-1.284-1.276-1.284H6.356c-.708 0-1.285.576-1.285 1.284v.856H2.929a.428.428 0 1 0 0 .855h11.14a.428.428 0 1 0 0-.855zm-8.141-.856c0-.236.192-.428.428-.428h4.295c.235 0 .419.188.419.428v.856H5.928v-.856zM11.5 14.48h-6a1.286 1.286 0 0 1-1.285-1.284V6.773a.428.428 0 0 1 .857 0v6.424c0 .237.192.428.428.428h6a.428.428 0 0 0 .429-.428V6.79a.428.428 0 0 1 .857 0v6.407c0 .708-.577 1.284-1.286 1.284z" fill="#585858" fill-rule="evenodd">
                                                </path>
                                            </svg>
                                        </use>
                                    </svg>
                                    删除
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="isAll">
                    已加载全部
                </li>
            </ul>

        </div>
        <div class="add-address">
            <div class="add-address-box">
                <button type="button" class="add-address-btn" @click="toAddAddress">新增收货地址</button>
            </div>
        </div>
    </div>
</template>

<script>
    import personHead from '../components/title-head';
    import {getSession,setSession} from "../assets/js/app";
    import { Toast } from 'mint-ui'

    export default {
        name: "admin-address",
        components:{
            personHead,
        },
        data:function () {
            return {
                titleName:'管理收货地址',
                addressList:[],
                ttrue:true,
                ffalse:false,
                me_name:'管理收货地址'
            }
        },
        methods:{
            toAddAddress () {
                this.$router.push('/person-center/set/admin_address/add_address');
            },
            remove_address(i){
                this.axios.post('/users/address/delete/',{
                    id: i.id,
                })
                    .then((response)=> {
                        // console.log(response);
                        //1.存session
                        // setSession({key: "uid", value:response.data.data.id});
                        //2.跳转页面
                        Toast('删除成功');
                        this.$router.push('/item_back');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
            xie_address(){
                this.$router.push({ name: 'set-address', params: { id: this.addressList[0].id }});
            }
        },
        created() {
            let uidStr = getSession("uid");
            this.axios.get(`/users/address/list/?uid=${uidStr}`)
                .then((result) => {
                    if (result) {
                        // console.log(result.data);
                        if(result.data.status){
                            this.addressList = result.data.data;
                            console.log(this.addressList);
                        }

                    }
                })
        },

    }
</script>

<style scoped lang="scss">
    a{
        text-decoration: none;
    }
    .bg-box{
        padding-top: 48px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 100vh;
        background-color: #f2f2f2;
    }
    .address-box .no-address{
        padding-top: 30vh;
        font-size: 14px;
        line-height: 24px;
        color: #585858;
        letter-spacing: 0;
        text-align: center;
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }
    .address-box .no-address::before{
        content:'';
        display: inline-block;
        width: 21px;
        height: 1px;
        background: #585858;
        vertical-align: middle;
    }
    .address-box .no-address::after{
        content:'';
        display: inline-block;
        width: 21px;
        height: 1px;
        background: #585858;
        vertical-align: middle;
    }

    .add-address{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
    }
    .add-address .add-address-box{
        padding: 15px;
        background-color: #f2f2f2;
    }
    .add-address .add-address-btn{
        width: 100%;
        min-height: 44px;
        border: 0 solid rgba(0,0,0,0);
        background: #7f0019;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        line-height: 22px;
        border-radius: 22px;
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
        outline: none;
    }

    .address-box .address-list .isAll{
        padding-top: 10px;
        padding-bottom: 84px;
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #999;
        text-align: center;
        background: #f2f2f2;
    }
    .address-box .address-list .address-item{
        margin-top: 10px;
        background-color: #ffffff;
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }
    .address-box .address-list .address-item .name{
        padding: 8px 37px 8px 41px;
        font-size: 14px;
        color: #000;
        letter-spacing: 1.17px;
        font-weight: 700;
    }
    .address-box .address-list .address-item .body{
        border-top: 1px solid rgba(188,187,193,.5);
        padding: 28.5px 41px 24.5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .address-box .address-list .address-item .body .text{
        font-size: 12px;
        color: #585858;
        line-height: 24px;
        letter-spacing: -.14px;
    }
    .address-box .address-list .address-item .actions{
        border-top: 1px solid rgba(188,187,193,.5);
        padding: 18px 37px 17px 41px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .address-box .address-list .address-item .actions .default-btn{
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 1px;
        font-weight: 700;
        color: #7f0019;
    }
    .address-box .address-list .address-item .actions .default-btn-black{
        color: #999;
        font-weight: 400;
    }
    .address-box .address-list .address-item .actions .operation{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .address-box .address-list .address-item .actions .operation a{
        font-size: 12px;
        color: #585858;
        line-height: 17px;
        letter-spacing: 1px;
        font-weight: 300;
    }
    .address-box .address-list .address-item .actions .operation a:nth-child(2){
        margin-left: 13px;
    }
</style>