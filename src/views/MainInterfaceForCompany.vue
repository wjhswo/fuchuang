<template>
    <div id="main">
        <HeadPart/>
        <CompanyMenuBar v-on:getMenu="getMenu"/>
        <GetResume v-if="menu[1]"/>
        <CompanyInformation v-if="menu[0]"/>
    </div>
</template>

<script>
import CompanyMenuBar from "../components/CompanyMenuBar.vue"
import GetResume from "../components/GetResume.vue"
import CompanyInformation from "../components/CompanyInformation.vue"
import HeadPart from "../components/HeadPart.vue"

export default{
    components:{
        CompanyMenuBar,
        GetResume,
        CompanyInformation,
        HeadPart
    },
    data(){
        return{
            menu:[true,false],
        }
    },
    methods:{
        getMenu(menu){
            this.menu=menu;
        }
    }
}
</script>

<style scoped>
#main{
    margin-left: 250px;
    margin-top: 140px;
}
</style>