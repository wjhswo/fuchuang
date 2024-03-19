<template>
    <div id="resume">
        <div>
            <p id="title">撰写简历</p>
            <hr>
        </div>
        <div>
            <p id="h2">个人信息</p>
            <div class="inner" id="firstBox">
                <div>
                    <div class="inputPart">
                        <a>姓名：</a>
                        <input type="text">
                    </div>
                    <div class="inputPart">
                        <a>性别：</a>
                        <input type="text">
                    </div>
                </div>
                <div id="rightBox">
                    <div class="inputPart">
                        <a>住址：</a>
                        <input type="text">
                    </div>
                    <div class="inputPart">
                        <a>年龄：</a>
                        <input type="text">
                    </div>
                </div>
                <div id="rightBox">
                    <div class="inputPart">
                        <a>电话：</a>
                        <input type="text">
                    </div>
                    <div class="inputPart">
                        <a>学历：</a>
                        <select>
                            <option>本科</option>
                            <option>专科</option>
                        </select>
                    </div>
                </div>
            </div>
            <p id="h2">职业预期</p>
            <div class="inner inputPart">
                <a>期望薪资/月：</a>
                <input type="number">
            </div>
            <div class="inner inputPart">
                <a>期望职业：</a>
                <select>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <p id="h2">自我评价</p>
            <div class="inner">
                <a>个人长处</a>
                <div>
                    <textarea></textarea>
                </div>
                <a>项目经验</a>
                <div>
                    <textarea></textarea>
                </div>
            </div>
            <div id="buttonPart">
                <button>提交</button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#resume{
    width:950px;
    margin-left: 150px;
    margin-top: 50px;
}
textarea{
    height: 400px;
    width: 700px;
    margin-bottom: 50px;
    border: none;
    margin-top: 30px;
    background-color: rgb(241, 241, 241);
}
textarea:hover{
    background-color: rgb(222, 222, 222);
}
textarea:focus{
    box-shadow: 0px 0px 2px rgb(0, 34, 255);
    background-color: white;
    outline: none;
}
.inner{
    margin-left: 50px;
}
input{
    border-width: 0px;
    border-radius: 2px;
    background-color: rgb(241, 241, 241);
    height:25px;
    width: 160px;
}
select{
    width: 160px;
    border-width: 0px;
    border-radius: 2px;
    background-color: rgb(241, 241, 241);
    height:25px;
}
select:focus{
    box-shadow: 0px 0px 2px rgb(0, 34, 255);
    background-color: white;
}
select:hover{
    background-color: rgb(222, 222, 222);
}
input:focus{
    outline: none;
    box-shadow: 0px 0px 2px rgb(0, 34, 255);
    background-color: white;
}
input:hover{
    background-color: rgb(222, 222, 222);
}
#h2{
    width: 100%;
    font-size: 1.3em;
}
#firstBox{
    display: flex;
}
#rightBox{
    margin-left: 50px;
}
#buttonPart{
    display: flex;
    justify-content: center;
}
button{
    border:none;
    background-color: rgb(228, 252, 191);
    padding: 5px;
    border-radius: 5px;
    width: 80px;
}
button:hover{
    background-color: green;
    color:white;
}
#title{
    font-size: 1.8em;
}
.inputPart{
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    display: flex;
}
</style>