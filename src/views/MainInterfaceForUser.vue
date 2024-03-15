<template>
    <div id="main">
        <UserMenuBar/>
        <GetCompany/>
        <UserResume/>
        <PersonalInformation/>
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
    }
}
</script>

<style scoped>
#main{
    margin-left: 300px;
}
</style>