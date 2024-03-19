<template>
    <div id="personalInformation">
        <div>
            <p id="title">个人信息</p>
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
            <button @click="changeInformation()">修改信息</button>
        </div>
        <ChangePersonalInformation v-if="change" v-on:get="get"/>
    </div>
</template>

<script>
import ChangePersonalInformation from "./ChangePersonalInformation.vue"

export default{
    components:{
        ChangePersonalInformation,
    },
    data(){
        return{
            change:false,
        }
    },
    //修改信息窗口
    methods:{
        changeInformation(){
            this.change=true;
        },
        get(change){
            this.change=change;
        }
    }
}
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