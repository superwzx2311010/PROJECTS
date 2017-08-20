<template>
    <div class="templateDiv">
        <comment :myId="goodsId"></comment>
    </div>
</template>
<script>
    import comment from "../../subcomponents/Comment.vue"
    export default{
        components:{
           comment
        },
        data(){
            return{
                goodsId:0
            }
        },
        methods:{

        },
        created(){
            this.goodsId=this.$route.params.goodsid;
        },
    }
</script>
<style scoped>

</style>
