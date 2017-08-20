<template>
    <div>
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for="item in imgs">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        props:["imgs"],
    }
</script>
<style scoped>
    .mint-swipe {
        width: 100%;
        height: 300px;
        background-color: pink;
    }

    .mint-swipe img {
        width: 100%;
        height: 100%;
    }
</style>
