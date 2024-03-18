<template>
    <div id="getCompany">
        <div class="inner">
            <p id="title">推荐公司</p>
            <hr>
        </div>
        <div class="inner">
            <a>No.1</a>
            <a>公司名称：xxx</a>
            <a>薪资：5000/月</a>
        </div>
        <div class="inner">
            <a>公司介绍：</a>
            <p>blablabla</p>
        </div>
        <div class="inner">
            <a>岗位介绍：</a>
            <p>blablabla</p>
        </div>
        <div class="inner">
            <a>提升建议：</a>
            <p>blablabla</p>
        </div>
        <div class="inner" id="buttonBox">
            <button>上一个</button>
            <button id="getJob">投递简历</button>
            <button>下一个</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#getCompany{
    width:950px;
    margin-left: 150px;
    margin-top: 50px;
}
a{
    margin-right: 20px;
}
#buttonBox{
    display: flex;
    justify-content:space-around;
    padding:0px;
}
.inner{
    margin-top: 50px;
    font-size: 1.2em;
    margin-right: 50px;
}
p{
    margin:0px;
    height:70px;
}
button{
    border: none;
    padding:10px;
    border-radius:10px;
}
button:hover{
    background-color: gray;
    color:white;
}
#getJob{
    background-color: rgb(218, 255, 188);
}
#getJob:hover{
    background-color: green;
    color:white;
}
#title{
    font-size: 1.8em;
}
</style>