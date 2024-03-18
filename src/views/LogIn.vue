<template>
    <div id="background1">
        <a>登录</a>
        <div class="login" id="background2">
            <Transition>
                <LogIn  v-if="login"/>
            </Transition>
            <Transition>
                <div v-if="signin">
                    <ul id="signinUl">
                        <li @click="change('userButton')" class="whoSignin activeSigninButton" id="userButton">求职者注册</li>
                        <li @click="change('companyButton')" class="whoSignin" id="companyButton">公司注册</li>
                    </ul>
                    <UserSignIn v-if="user"/>
                    <CompanySignIn v-if="company"/>
                </div>
            </Transition>
            <Transition>
                <ForgetPassword v-if="forget"/>
            </Transition>
            <ul id="mode">
                <li class="buttons activeButton" id="loginButton" @click="jump('login','loginButton')">登录</li>
                <li class="buttons" id="signinButton" @click="jump('signin','signinButton')">注册</li>
                <li class="buttons" id="forgetButton" @click="jump('forget','forgetButton')">忘记密码</li>
            </ul>
        </div>
        <a>应聘</a>
    </div>
</template>

<script>
import LogIn from "../components/LogIn"
import UserSignIn from "../components/UserSignIn"
import CompanySignIn from "../components/CompanySignIn"
import ForgetPassword from "../components/ForgetPassword"

export default{
  components:{
    LogIn,
    UserSignIn,
    CompanySignIn,
    ForgetPassword,
  },
  data(){
    return{
        login:true,
        signin:false,
        forget:false,
        user:true,
        company:false,
    }
  },
  methods:{
    //设置底部按钮的背景
    setButton(className){
        var buttons = document.getElementsByClassName("buttons");
        for(var i=0;i<3;i++){
            buttons[i].className="buttons";
        }
        var button=document.getElementById(className);
        button.className="buttons activeButton";
    },
    //跳转登录，注册和忘记密码
    jump(backgroundClass,buttonId){
        var background = document.getElementById("background2");
        background.className=backgroundClass;

        this.login=false;
        this.signin=false;
        this.forget=false;
        if(backgroundClass=="login"){
            this.login=true;
        }else if(backgroundClass=="signin"){
            this.signin=true;
        }else if(backgroundClass=="forget"){
            this.forget=true;
        }

        this.setButton(buttonId);
    },
    setSigninButton(className){
        var buttons = document.getElementsByClassName("whoSignin");
        for(var i=0;i<2;i++){
            buttons[i].className="whoSignin";
        }
        var button=document.getElementById(className);
        button.className="whoSignin activeSigninButton";
    },
    //注册的切换
    change(buttonId){
        this.user=false;
        this.company=false;
        if(buttonId=="userButton"){
            this.user=true;
        }else if(buttonId=="companyButton"){
            this.company=true;
        }

        this.setSigninButton(buttonId);
    }
  }
}
</script>

<style scoped>
#background1{
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    background: linear-gradient(
      217deg,
      rgba(255, 166, 166, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ), linear-gradient(127deg, rgba(135, 248, 135, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(99, 182, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    z-index: 100;
}
#background2{
    width:350px;
    background: linear-gradient(to bottom right, rgb(251, 224, 253),white, rgb(216, 241, 255));
    border-radius:30px;
    box-shadow: 0px 0px 20px rgb(126, 126, 126);
    position: relative;
    transition-duration: 0.5s;
    margin:120px;
}
.hide{
    display: none;
}
.login{
    height:350px;
}
.signin{
    height:600px;
}
.forget{
    height:500px;
}
ul{
    display: flex;
    list-style-type: none;
    margin:0px;
    margin-bottom: 10px;
    margin-top: 30px;
}
#mode{
    position: absolute;
    bottom:10px;
    right:10px;
    font-size: 0.25em;
}
li{
    margin: 2px;
    color:rgb(158, 158, 230);
    font-weight:800;
    margin-left: 10px;
}
a{
    font-size: 8em;
    color:white;
}
.activeButton{
    background-color: green;
    color: white;
    border-radius: 5px;
}
.v-enter-active{
    transition: opacity 1s;
}
.v-enter-from{
    opacity: 0;
}
.v-enter-to{
    opacity: 100;
}
#signinUl{
    margin-left: 50px;
}
.activeSigninButton{
    color:blue;
}
</style>