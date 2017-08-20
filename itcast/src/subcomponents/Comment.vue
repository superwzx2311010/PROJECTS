<template class="templateDiv">
    <div>
        <div class="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入评论内容" v-model="content"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
        <div class="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in commentList">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';

    export default {
        props: ["myId"],
        data() {
            return {
                content: "",
                commentList: [],
                pageIndex:1,
            }
        },
        methods: {
            postcomment() {
                var url = this.$urlPrefix + "/api/postcomment/" + this.myId;
                this.$http.post(url, {content: this.content}, {emulateJSON: true}).then(function (res) {
                    Toast(res.body.message);
                    if(res.body.status==0){
                        this.content = "";
                        this.commentList= [];
                        this.pageIndex=1;
                        this.getCommentList();
                    }



                })
            },
            getCommentList() {
                var url = this.$urlPrefix + "/api/getcomments/" + this.myId + "?pageindex="+this.pageIndex;
                this.$http.get(url).then(function (res) {
                    console.log(res.body);
                    this.commentList =this.commentList.concat(res.body.message) ;
                })
            },
            getMore(){
                this.pageIndex++;
                this.getCommentList();
            }
        },
        created() {
            this.getCommentList();
        }

    }
</script>
<style scoped>
    .postcomment,.list {
        padding: 5px;
    }

    .p {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3)
    }

    textarea {
        font-size: 14px;
    }

    .title {
        padding: 20px 15px 7px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
    }
.mui-table-view-cell{
    font-size: 14px;
}
</style>
