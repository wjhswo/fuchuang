<template>
    <a-space>
        <a-button type="text">
            <template #icon>
                <icon-delete />
            </template>
            <template #default>Text</template>
        </a-button>
        <a-button type="text">
            <template #icon>
                <icon-user />
            </template>
        </a-button>
    </a-space>
    <div>
        <LogIn></LogIn>
    </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import { IconUser, IconDelete } from "@arco-design/web-vue/es/icon";

export default{
    components:{
        LogIn,
        IconUser,
        IconDelete
  }
}
</script>

<style>

</style>
