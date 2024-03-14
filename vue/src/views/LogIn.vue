<template>
    <div id="background1">
        <a>登录</a>
        <div class="forgetPassword" id="background2">
            <LogIn  class="hide"/>
            <div class="hide">
                <ul>
                    <li>求职者注册</li>
                    <li>公司注册</li>
                </ul>
                <UserSignIn class="hide"/>
                <CompanySignIn class="hide"/>
            </div>
            <ForgetPassword/>
            <ul id="mode">
                <li>登录</li>
                <li>注册</li>
                <li>忘记密码</li>
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
    width:250px;
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
.singin{
    height:550px;
}
.forgetPassword{
    height:430px;
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
}
a{
    font-size: 8em;
    color:white;
}
</style>