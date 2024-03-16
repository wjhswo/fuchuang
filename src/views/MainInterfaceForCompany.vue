<template>
    <div id="main">
        <CompanyMenuBar v-on:getMenu="getMenu"/>
        <GetResume v-if="menu[1]"/>
        <CompanyInformation v-if="menu[0]"/>
    </div>
</template>

<script>
import CompanyMenuBar from "../components/CompanyMenuBar.vue"
import GetResume from "../components/GetResume.vue"
import CompanyInformation from "../components/CompanyInformation.vue"

export default{
    components:{
        CompanyMenuBar,
        GetResume,
        CompanyInformation,
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
    margin-left: 300px;
}
</style>