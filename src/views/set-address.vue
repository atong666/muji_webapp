<template>
    <div class="bg-box">
        <person-head :titleName="titleName" :saveBtn="ttrue" :other="ffalse" @action="add"></person-head>
        <div class="add-details">
            <ul class="detail-list">
                <li class="detail-item">
                    <div class="inner-box">
                        <div class="item-title">
                            收货人
                        </div>
                        <div class="input-box">
                            <input type="text" class="input-text" placeholder="请输入收件人姓名" v-model="nameA"/>
                        </div>
                    </div>
                </li>
                <li class="detail-item">
                    <div class="inner-box">
                        <div class="item-title">
                            联系电话
                        </div>
                        <div class="input-box">
                            <input type="text" class="input-text" placeholder="请输入联系电话" v-model="telA"/>
                        </div>
                    </div>
                </li>
                <li class="detail-item">
                    <div class="inner-box">
                        <div class="item-title">
                            所在地区
                        </div>
                        <div class="input-box">
                            省：
                            <input type="text" class="input-text-area" placeholder="" v-model="provinceA">
                            市：
                            <input type="text" class="input-text-area" placeholder="" v-model="cityA"/>
                            区/县：
                            <input type="text" class="input-text-area" placeholder="" v-model="areaA"/>
                        </div>
                    </div>
                </li>
                <li class="detail-item">
                    <div class="inner-box">
                        <div class="item-title">
                            详细地址
                        </div>
                        <div class="input-box">
                            <textarea type="text" maxlength="200" rows="3" class="input-text-long" placeholder="请输入详细信息，不少于5个字" v-model="detailA"></textarea>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="default-box">
                <div class="inner-box">
                    <div class="title">
                        设为默认地址
                    </div>
                    <div class="default-btn">
                        <div class="checkbox">
                            <svg class="svg-sprite" style="width: 15px; height: 15px; fill: rgb(0, 0, 0);" @click="clickDefault" v-if="isDefaultA==1">
                                <use xlink:href="#svg-sprite-global-checkbox-true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="svg-sprite-global-checkbox-true" width="100%" height="100%">
                                        <path d="M7.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 4a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="#7F0019" fill-rule="nonzero">
                                        </path>
                                    </svg>
                                </use>
                            </svg>
                            <svg class="svg-sprite" style="width: 15px; height: 15px; fill: rgb(0, 0, 0);" @click="clickDefault"  v-else-if="isDefaultA==0">
                                <use xlink:href="#svg-sprite-global-checkbox-false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="svg-sprite-global-checkbox-false" width="100%" height="100%">
                                        <path d="M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0 1a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="#999" fill-rule="nonzero">
                                        </path>
                                    </svg>
                                </use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import personHead from '../components/person-head';
    import { Toast } from 'mint-ui'

    export default {
        name: "set-address",
        props: ['id'],
        components: {
            personHead
        },
        data() {
            return {
                nameA: '',
                provinceA: '',
                cityA: '',
                areaA: '',
                detailA: '',
                telA:'',
                isDefaultA: Number,
                titleName:'编辑收货地址',
                ttrue:true,
                ffalse:false,
                code:'200900',
                uid: Number
            }
        },
        methods: {
            add() {
                this.axios.post('/users/address/update/',{
                    id:this.id,
                    province:this.provinceA,
                    tel:this.telA,
                    city:this.cityA,
                    area:this.areaA,
                    street:this.detailA,
                    name:this.nameA,
                    isDefault:this.isDefaultA,
                    uid:this.uid,
                    code:this.code
                })
                    .then((result)=>{
                        // console.log(result);
                        // alert(result.data.msg);
                        Toast('更新地址成功');
                    })
                    .then(()=>{
                        this.$router.push('/item_back');
                    });
            },
            clickDefault () {
                if (this.isDefaultA == 1){
                    this.isDefaultA = 0;
                }else{
                    this.isDefaultA = 1;
                }
            },

        },
        created(){
            this.axios.get(`/users/address/detail/?id=${this.id}`)
                .then((result) => {
                    if (result) {
                        if(result.data.status){
                            let {
                                name,
                                tel,
                                province,
                                city,
                                area,
                                street,
                                code,
                                isDefault,
                                uid
                            } = result.data.data;
                            this.nameA = name;
                            this.telA = tel;
                            this.provinceA = province;
                            this.cityA = city;
                            this.areaA = area;
                            this.detailA = street;
                            this.code = code;
                            this.isDefaultA = isDefault;
                            this.uid = uid;
                        }

                    }
                })
        }
    }
</script>

<style scoped lang="scss">
    .bg-box{
        padding-top: 48px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 100vh;
        background-color: #f2f2f2;
    }
    .add-details{
        margin-top: 10px;
        font-family: Roboto,Noto,sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }

    .add-details .detail-item{
        padding-left: 16px;
        background-color: #ffffff;
    }
    .add-details .detail-item .inner-box{
        border-top: .5px solid rgba(188,187,193,.5);
        padding: 11px 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .add-details .detail-item .inner-box .item-title{
        min-width: 84px;
        font-size: 14px;
        color: #000;
        line-height: 22px;
        letter-spacing: -.34px;
        flex-grow: 0;
    }
    .add-details .detail-item .inner-box .input-box{
        padding-right: 16px;
        flex-grow: 1;
        font-size: 14px;
        line-height: 22px;
        color: #000;
        letter-spacing: -.34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
    .add-details .detail-item .inner-box .input-box .input-text{
        width: 100%;
        color: #585858;
        display: block;
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        letter-spacing: 1.17px;
        border:none;
        outline: none;
    }
    .add-details .detail-item .inner-box .input-box .input-text-area{
        width: 17%;
        color: #585858;
        /*display: block;*/
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        letter-spacing: 1.17px;
        border:none;
        outline: none;
    }
    .add-details .detail-item .inner-box .input-box .input-text-long{
        width: 100%;
        color: #585858;
        display: block;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 1.17px;
        border:none;
        outline: none;
    }
    .add-details .default-box{
        margin-top: 10px;
        padding-left: 16px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #ffffff;
    }
    .add-details .default-box .inner-box{
        padding: 11px 0 10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-details .default-box .inner-box .title{
        width: 84px;
        font-size: 14px;
        color: #999;
        line-height: 22px;
        height: 22px;
        letter-spacing: -.34px;
        flex-grow: 0;
    }
    .add-details .default-box .inner-box .default-btn{
        flex-grow: 1;
        text-align: right;
        box-sizing: border-box;
        padding-right: 28px;
    }
    .add-details .default-box .inner-box .default-btn .checkbox{
        vertical-align: middle;
    }
    .add-details .default-box .inner-box .default-btn .checkbox svg{
        display: inline;
    }
</style>