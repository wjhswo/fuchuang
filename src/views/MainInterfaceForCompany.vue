<template>
    <div id="main">
        <CompanyMenuBar/>

    </div>
</template>

<script>
import CompanyMenuBar from "../components/CompanyMenuBar.vue"

export default{
    components:{
        CompanyMenuBar,
    }
}
</script>

<style scoped>
#main{
    margin-left: 300px;
}
</style>