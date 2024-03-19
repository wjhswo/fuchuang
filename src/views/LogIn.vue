<template>
    <div id="background1">  
        <div id="background2">
            <div id="leftPicture">
                <div id="leftText">
                    <p>{{ mode }}</p>
                </div>
                <ul id="mode">
                    <li class="buttons activeButton" id="loginButton" @click="jump('login','loginButton')">登录</li>
                    <li class="buttons" id="signinButton" @click="jump('signin','signinButton')">注册</li>
                    <li class="buttons" id="forgetButton" @click="jump('forget','forgetButton')">忘记密码</li>
                </ul>
            </div>
            <div id="background3">
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
            </div>
        </div>
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
        mode:"登录",
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
    background-color: rgb(27, 27, 142);
    height:100%;
    z-index: 100;
}
#background2{
    width:700px;
    height:600px;
    display: flex;
    overflow:hidden;
    border-radius: 20px;
}
#leftPicture{
    width: 350px;
    height:600px;
    position: relative;
    display:flex;
    justify-content: center;
    background: 
        linear-gradient(217deg,rgb(116, 207, 243),rgba(255, 255, 255, 0) 70.71%), 
        linear-gradient(127deg, rgb(207, 201, 255), rgba(255, 255, 255, 0) 70.71%),
        linear-gradient(336deg, rgb(109, 109, 255), rgba(0, 0, 255, 0) 70.71%);
}
#background3{
    width:350px;
    background-color: white;
    transition-duration: 0.5s;
    right:0px;
    display: flex;
    align-items: center;
}
#leftText{
    margin-top: 200px;
    font-size: 2.5em;
    width:100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-width: 3px;
    border-style: solid;
    border-color: white;
}
p{
    color:white;
    text-align: center;
}
ul{
    display: flex;
    list-style-type: none;
    margin:0px;
    margin-bottom: 10px;
    width: 100%;
}
#mode{
    position: absolute;
    bottom:10px;
    left:10px;
    font-size: 0.25em;
    color:white;
}
li{
    margin: 2px;
    font-weight:800;
    margin-left: 10px;
    border-radius: 5px;
}
a{
    font-size: 8em;
    color:white;
}
.activeButton{
    background-color: rgb(205, 248, 255);
    border-radius: 5px;
    color:black;
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
    background-color: rgb(206, 206, 206);
}
</style>