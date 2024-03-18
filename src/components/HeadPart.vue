<template>
    <div id="headPart">
        <div id="namePart"> 
            <img src="../assets/img/user2.png">         
            <a>XXX</a>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#headPart{
    height: 80px;
    width: 100%;
    z-index: 100%;
    position: fixed;
    top:0px;
    left:0px;
    z-index: 2;
    background-color: white;
    box-shadow: 0px 0px 2px rgb(126, 126, 126);
}
img{
    height:40px;
    margin: 20px;
}
#namePart{
    display: flex;
    align-items: center;
}
</style>