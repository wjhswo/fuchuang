<template>
    <div id="main">
        <CompanyMenuBar/>
        <GetResume/>
        <CompanyInformation/>
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
    }
}
</script>

<style scoped>
#main{
    margin-left: 300px;
}
</style>