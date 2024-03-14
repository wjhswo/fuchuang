<template>
    <div id="main">
        <UserMenuBar/>
        <GetCompany/>
        <UserResume/>
    </div>
</template>

<script>
import UserMenuBar from "../components/UserMenuBar.vue"
import GetCompany from "../components/GetCompany.vue"
import UserResume from "../components/UserResume.vue"
export default{
    components:{
        UserMenuBar,
        GetCompany,
        UserResume,
    }
}
</script>

<style scoped>
#main{
    margin-left: 300px;
}
</style>