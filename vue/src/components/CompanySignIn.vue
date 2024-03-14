<template>
    <div id="companySingInPart">
        <a>公司</a>
        <div>
            <input type="text" v-model="userName">
        </div>
        <a>密码</a>
        <div>
            <input type="password" v-model="password">
        </div>
        <a>确认密码</a>
        <div>
            <input type="password" v-model="repeatPassword">
        </div>
        <a>电话号码</a>
        <div>
            <input type="number" v-model="phoneNumber">
        </div>
        <a>辅助邮箱</a>
        <div>
            <input type="email" v-model="email">
        </div>
        <button>注册</button>
    </div>
</template>

<script>
</script>

<style scoped>
#companySingInPart{
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
button{
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
button:hover{
    background-color:rgb(25, 166, 25);
}
.choice{
    width:10px;
}
</style>