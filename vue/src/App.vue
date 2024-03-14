<template>
  <div id="app">
    <LogIn v-if="false"/>
    <MainInterfaceForUser v-if="true"/>
  </div>
</template>

<script>
import LogIn from "./views/LogIn.vue"
import MainInterfaceForUser from "./views/MainInterfaceForUser.vue"

export default{
  components:{
    LogIn,
    MainInterfaceForUser,
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  height:100%;
  margin:0px;
  background-color: rgb(241, 241, 241);
}
#app{
  height:100%;
}
.hide{
  display: hide;
}
</style>./views/MainInterfaceForUser.vue
