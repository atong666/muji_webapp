<template>
    <div class="person_msg">
        <div class="person_cont">
            <div class="person_icon">
                <svg class="svg-sprite" style="width: 77px; height: 77px; fill: rgb(0, 0, 0);">
                    <use xlink:href="#svg-sprite-account-default-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 77"
                             id="svg-sprite-account-default-avatar" width="100%" height="100%">
                            <g fill="none" fill-rule="evenodd">
                                <circle fill="#D8D8D8" cx="38.5" cy="38.5" r="38.5"></circle>
                                <path d="M10.967 65.41c6.566-3.757 17.737-5.865 19.53-10.628.24-2.623.149-4.452.149-6.849-1.204-.625-3.443-4.599-3.806-7.953-.945-.077-2.434-.988-2.871-4.586-.235-1.932.7-3.018 1.27-3.36-3.197-12.155-1.438-22.77 13.14-23.035 3.644 0 6.45.962 7.544 2.863 10.64 1.462 7.444 15.6 5.907 20.172.57.342 1.504 1.428 1.27 3.36-.437 3.598-1.927 4.509-2.873 4.586-.363 3.354-2.515 7.328-3.718 7.953 0 2.397-.245 4.226-.005 6.849 1.792 4.764 12.961 6.87 19.529 10.629C59.043 72.56 49.29 77 38.5 77c-10.79 0-20.543-4.439-27.533-11.59z"
                                      fill="#585858"></path>
                            </g>
                        </svg>
                    </use>
                </svg>
            </div>
            <div class="person_phone">
                {{user_name}}
            </div>
        </div>
    </div>
</template>

<script>
    import {getSession} from "../assets/js/app";
    export default {
        name: "person-user",
        created(){
            let uidStr = getSession("uid");
            this.axios.get(`/users/info/?uid=${uidStr}`)
                .then((response)=> {
                    // console.log(response.data.data.username);
                    this.user_name = response.data.data.username;
                    // 1.存session
                    // setSession({key: "uid", value:response.data.data.id});
                    // 2.跳转页面
                    // this.$router.push('/');
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        data(){
            return{
                user_name:'178******61'
            }
        }
    }
</script>

<style scoped lang="scss">
    .person_msg {
        margin-top: 44.5px;
        padding: 0 0px 0px 16px;
        width: 100vw;
        box-sizing: border-box;
        height: 120px;
        background-color: #FFFFFF;
        .person_cont {
            background-image: url(../assets/muji_jiantou_right.svg);
            background-repeat: no-repeat;
            background-position: 100%;
            background-size: 34px 34px;
            cursor: pointer;
            padding-right: 16px;
            height: 120px;
            display: flex;
            align-items: center;
            .person_icon {
                height: 77px;
                width: 77px;
                margin-right: 18px;
            }
            .person_phone {
                font-size: 14px;
                color: #000;
                line-height: 20px;
                letter-spacing: -.1px;
            }
        }
    }
</style>