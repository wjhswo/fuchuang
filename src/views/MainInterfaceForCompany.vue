<template>
    <div id="main">
        <HeadPart/>
        <CompanyMenuBar v-on:getMenu="getMenu"/>
        <GetResume v-if="menu[1]"/>
        <CompanyInformation v-if="menu[0]"/>
    </div>
    <div id="hahahah">
        {{ ans }}
    </div>
</template>

<script>
import CompanyMenuBar from "../components/CompanyMenuBar.vue"
import GetResume from "../components/GetResume.vue"
import CompanyInformation from "../components/CompanyInformation.vue"
import HeadPart from "../components/HeadPart.vue"
import axios from "axios"

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
            ans: {}
        }
    },
    methods:{
        getMenu(menu){
            this.menu=menu;
        },
    },

    mounted() {
        axios
                .get('https://yesno.wtf/api')
                .then( (res) => {
                    console.log(res)
                    this.ans = res.data.answer
                })
    }
}

// mounted () {
//     axios
//             .get('https://www.runoob.com/try/ajax/json_demo.json')
//             .then(function (res) {
//         console.log(res)
//     })
// }



</script>

<style scoped>
#main{
    margin-left: 250px;
    margin-top: 140px;
}
#hahahah {
    background-color: blueviolet;
    margin: 500px;
}
</style>