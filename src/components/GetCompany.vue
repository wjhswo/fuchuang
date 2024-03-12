<template>
    <div id="getCompany">
        <div id="first" class="inner">
            <a>No.1</a>
            <a>公司名称：xxx</a>
            <a>薪资：5000/月</a>
        </div>
        <div class="inner" id="second">
            <a>公司介绍：</a>
            <p>blablabla</p>
        </div>
        <div class="inner" id="third">
            <a>岗位介绍：</a>
            <p>blablabla</p>
        </div>
        <div class="inner" id="forth">
            <a>提升建议：</a>
            <p>blablabla</p>
        </div>
        <div class="inner" id="fifth">
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
    width:800px;
    margin-left: 150px;
    margin-top: 30px;
    border-radius:30px;
    background-color: rgb(233, 233, 233);
    padding: 30px;
}
a{
    margin-right: 20px;
}
#first{
    background-color: rgb(220, 255, 254);
    margin-top: 0px;
}
#second{
    background-color: rgb(213, 213, 255);
}
#third{
    background-color: rgb(255, 236, 213);
}
#forth{
    background-color: beige;
}
#fifth{
    display: flex;
    justify-content:space-around;
    padding:0px;
}
.inner{
    margin-left: 50px;
    margin-top: 30px;
    margin-right: 50px;
    border-radius:20px;
    padding:15px;
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
#getJob{
    background-color: rgb(218, 255, 188);
}
</style>