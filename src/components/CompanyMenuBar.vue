<template>
    <div id="MenuBar">
        <div id="namePart">
            <img src="../assets/img/user2.png">
            <span>XXX</span>
        </div>
        <ul>
            <li @click="sendMenu(0)">公司信息</li>
            <li @click="sendMenu(1)">收到简历</li>
            <li>登出</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            menu:[true,false]
        }
    },
    methods:{
        sendMenu(num){
            for(var i=0;i<2;i++){
                this.menu[i]=false;
            }
            this.menu[num]=true;
            this.$emit('getMenu',this.menu);
        }
    }
}
</script>

<style scoped>
#MenuBar{
    height: 100%;
    width: 300px;
    background-color: #eda63c;
    border-radius: 0px 20px 20px 0px;
    position: fixed;
    top:0px;
    left:0px;
    box-shadow: 0px 0px 20px rgb(126, 126, 126);
}
ul{
    margin-top: 100px;
}
li{
    font-size: 1.5em;
    color:black;
    height:15%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 40px;
    list-style: none;
}
img{
    width: 100px;
    height: 100px;
    margin:30px;
}
#namePart{
    font-size: 2em;
    display: flex;
    align-items: center;
    margin-top: 50px;
}
</style>