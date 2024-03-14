<template>
    <div id="app">
        <LogIn v-if="false"/>
        <MainInterfaceForUser v-if="true"/>
  </div>
  <div id="hahaha">
        <router-link to="/">hahahah</router-link>
        <router-view></router-view>
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
#hahaha{
  background-color: #68ed3c;
  display: flex;
  justify-content: center;
}

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
