<template>
    <div id="getCompany">
        <div class="window">
            <p id="h2">公司介绍</p>
            <div class="inner">
                <p>公司名称：xxx</p>
                <p>薪资：5000/月</p>
                <p>blablabla</p>
            </div>
        </div>
        <div class="window">
            <p id="h2">岗位介绍：</p>
            <div class="inner">
                <p>blablabla</p>
            </div>
        </div>
        <div class="window">
            <p id="h2">提升建议：</p>
            <div class="inner">
                <p>blablabla</p>
            </div>
        </div>
        <div id="buttonBox">
            <button>上一个</button>
            <button id="getJob">投递简历</button>
            <button>下一个</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.window{
    background: linear-gradient(to right, rgb(243, 255, 254),rgb(255, 255, 255) );
    box-shadow: 0px 0px 10px rgb(188, 188, 188);
    border-radius: 10px;
    padding:30px;
    margin-bottom: 30px;
}
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
    margin-left: 50px;
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
#h2{
    width: 100%;
    font-size: 1.3em;
    margin-top: 0px;
}
</style>