<template>
    <div id="forgetPasswordPart">
        <a>用户</a>
        <div>
            <input type="text" v-model="userName">
        </div>
        <a>邮箱</a>
        <div>
            <input type="email" v-model="email">
        </div>
        <a>验证码</a>
        <div>
            <input type="text" v-model="verificationCode" id="verificationCode">
            <button id="getVerificationCodeButton">发送验证码</button>
        </div>
        <a>新密码</a>
        <div>
            <input type="password" v-model="password">
        </div>
        <a>确认密码</a>
        <div>
            <input type="password" v-model="repeatPassword">
        </div>
        <button id="findBackButton">找回</button>
    </div>
</template>

<script>
</script>

<style scoped>
#forgetPasswordPart{
    margin-left: 30px;
    margin-top: 40px;
}
input{
    width: 180px;
    margin-bottom: 5px;
    margin-top: 5px;
}
a{
    color:rgb(169, 212, 255);
    font-weight:800;
}
#findBackButton{
    border: none;
    background-color: rgb(170, 235, 170);
    margin-left: 70px;
    margin-top: 20px;
    width:50px;
    height:50px;
    border-radius: 50%;
    color:white;
    transition-duration: 0.1s;
}
#findBackButton:hover{
    background-color:rgb(25, 166, 25);
}
.choice{
    width:10px;
}
#verificationCode{
    width: 90px;
    margin-right: 10px;
}
#getVerificationCodeButton{
    width: 80px;
    padding: 0px;
    margin-top: 12px;
    border: none;
    background-color: rgb(255, 232, 236);
    height:23px;
    border-radius: 5px;
}
#getVerificationCodeButton:active{
    background-color: pink;
}
</style>