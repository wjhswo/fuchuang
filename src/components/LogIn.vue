<template>
    <div id="loginPart">
        <img src="../assets/img/user.png" id="avatar">
        <div>
            <a>用户</a>
            <div>
                <input type="text" v-model="userName">
            </div>
            <a>密码</a>
            <div>
                <input type="password" v-model="password">
            </div>
            <button>→</button>
            </div>
    </div>
</template>

<script>
</script>

<style scoped>
#loginPart{
    margin-left: 30px;
}
input{
    width: 180px;
    margin-bottom: 15px;
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
    font-size: 1.3em;
    transition-duration: 0.1s;
}
button:hover{
    background-color:rgb(25, 166, 25);
}
#avatar{
    width:60px;
    margin-left:65px ;
    margin-top:30px;
}
</style>