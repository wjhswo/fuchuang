<template>
    <div id="personalInformation">
        <div>
            <p id="title">撰写简历</p>
            <hr>
        </div>
        <ul>
            <li>昵称</li>
            <li>姓名</li>
            <li>性别</li>
            <li>生日</li>
            <li>电话</li>
            <li>邮箱</li>
        </ul>
        <div id="midInside">
            <button>修改信息</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#personalInformation{
    width:950px;
    margin-left: 150px;
    margin-top: 50px;
}
ul{
    list-style: none;
    margin-top: 50px;
    font-size: 1.2em;
    margin-right: 50px;
    padding: 0px;
}
li{
    margin-top: 20px;
}
button{
    border: none;
    padding:10px;
    border-radius:10px;
    background-color: rgb(233, 255, 248);
}
button:hover{
    background-color: blue;
    color:white;
}
#midInside{
    display: flex;
    align-items: center;
    justify-content: center;
}
#title{
    font-size: 1.8em;
}
</style>