<template>
    <div id="resume">
        <div class="inner" id="firstBox">
            <div>
                <div>
                    <a>姓名：</a>
                    <input type="text">
                </div>
                <div>
                    <a>性别：</a>
                    <input type="text">
                </div>
                <div>
                    <a>年龄：</a>
                    <input type="text">
                </div>
            </div>
            <div id="rightBox">
                <div>
                    <a>住址：</a>
                    <input type="text">
                </div>
                <div>
                    <a>联系方式：</a>
                    <input type="text">
                </div>
                <div>
                    <a>学历：</a>
                    <input type="radio" name="education"><span>本科</span>
                    <input type="radio" name="education"><span>专科</span>
                </div>
            </div>
        </div>
        <div class="inner">
            <a>期望薪资/月</a>
            <input type="number">
        </div>
        <div class="inner">
            <a>期望职业</a>
            <input type="radio" class="choice" name="job"/><span>1</span>
            <input type="radio" class="choice" name="job"><span>2</span>
            <input type="radio" class="choice" name="job"/><span>1</span>
            <input type="radio" class="choice" name="job"><span>2</span>
        </div>
        <div class="inner">
            <a>自我介绍</a>
            <div>
                <textarea></textarea>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#resume{
    width:800px;
    margin-left: 150px;
    margin-top: 50px;
}
textarea{
    height: 400px;
    width: 700px;
    margin-bottom: 50px;
    border: none;
    margin-top: 30px;
}
.inner{
    margin-left: 50px;
    margin-top: 50px;
    font-size: 1.2em;
    margin-right: 50px;
}
input{
    border: none;
}
#firstBox{
    display: flex;
}
#rightBox{
    margin-left: 50px;
}
</style>