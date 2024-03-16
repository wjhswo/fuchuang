<template>
    <div id="main">
        <UserMenuBar v-on:getMenu="getMenu"/>
        <GetCompany v-if="menu[1]"/>
        <UserResume v-if="menu[0]"/>
        <PersonalInformation v-if="menu[2]"/>
    </div>
</template>

<script>
import UserMenuBar from "../components/UserMenuBar.vue"
import GetCompany from "../components/GetCompany.vue"
import UserResume from "../components/UserResume.vue"
import PersonalInformation from "../components/PersonalInformation.vue"

export default{
    components:{
        UserMenuBar,
        GetCompany,
        UserResume,
        PersonalInformation,
    },
    data(){
        return{
            menu:[true,false,false],
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