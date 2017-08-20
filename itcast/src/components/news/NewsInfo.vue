<template>
    <div class="templateDiv">
        <div class="title">
            <h3>{{info.title}}</h3>
            <p>{{info.add_time|dateFmt("YYYY-MM-DD HH:mm:ss")}} {{info.click}}次浏览</p>
        </div>
        <div class="content" v-html="info.content"></div>
        <comment :myId="id"></comment>
    </div>
</template>
<script>
import Comment from "../../subcomponents/Comment.vue";

    export default{
        components:{
            comment:Comment,
        },
        data(){
            return{
                info:{},
                id:""
            }
        },
        created(){
            var newsId=this.$route.params.id;
            this.id=newsId;
            console.log(newsId);
            var url=this.$urlPrefix+"/api/getnew/" + newsId;
            this.$http.get(url).then(function (res) {
                this.info = res.body.message[0];
            })
        }

    }
</script>
<style scoped>
    .title{
        color:#0094ff;
    }
</style>
