<template>
    <div id="MenuBar">
        <ul>
            <li @click="sendMenu(0)" class="menu">公司信息</li>
            <li @click="sendMenu(1)" class="menu">收到简历</li>
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
        //切换背景
        setActiveMenu(num){
            var menu=document.getElementsByClassName("menu");
            for(var i=0;i<2;i++){
                menu[i].className="menu";
            }
            menu[num].classList.add("activeMenu");
        },
        //菜单切换
        sendMenu(num){
            this.setActiveMenu(num);
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
    width: 250px;
    background-color: white;
    position: fixed;
    top:0px;
    left:0px;
    box-shadow: 0px 0px 1px rgb(126, 126, 126);
}
ul{
    margin-top: 140px;
    padding:0px;
}
li{
    color:black;
    height:15%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    list-style: none;
}
li:hover{
    background: linear-gradient(to right, white,rgb(217, 217, 217) );
}
.activeMenu{
    background: linear-gradient(to right, white,rgb(235, 235, 235) );
    color:blue;
}
</style>