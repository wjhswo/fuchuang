<template>
    <div id="changePersonalInformation">
        <div class="inner">
            <a>昵称：</a>
            <input type="text">
        </div>
        <div class="inner">
            <a>姓名：</a>
            <input type="text">
        </div>
        <div class="inner">
            <a>性别：</a>
            <select>
                <option>男</option>
                <option>女</option>
            </select>
        </div>
        <div class="inner">
            <a>生日：</a>
            <input type="text">
        </div>
        <div class="inner">
            <a>电话：</a>
            <input type="tel">
        </div>
        <div class="inner">
            <a>邮箱：</a>
            <input type="email">
        </div>
        <div id="midInside">
            <button @click="send()">保存</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            change:false,
        }
    },
    methods:{
        send(){
            this.$emit('get',this.change);
        }
    }
}
</script>

<style scoped>
#changePersonalInformation{
    position: fixed;
    top:25%;
    left:40%;
    background: linear-gradient(to right, rgb(243, 255, 254),rgb(255, 255, 255) );
    padding: 30px;
    width:400px;
    box-shadow: 0px 0px 10px gray;
    border-radius: 5px;
}
.inner{
    margin-bottom: 20px;
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
button{
    border: none;
    padding:10px;
    border-radius:10px;
    background-color: blue;
    color:white;
}
button:hover{
    background-color: rgb(71, 71, 255);
    color:white;
}
#midInside{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>