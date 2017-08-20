<template>
    <div class="templateDiv">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for='item in newsList'>
                <router-link v-bind="{to:'/news/NewsInfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <p class='ft'>
                            <span>{{item.add_time|dateFmt("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="click-number">点击数{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getNewsList: function () {
                var url = "http://139.199.192.48:8888/api/getnewslist";
                this.$http.get(url).then(function (res) {
                    // 3.0 获取到响应报文体数据
                    this.newsList = res.body.message;
                })
            }
        },
        created() {
            this.getNewsList();
        }

    }
</script>
<style scoped>
    .mui-table-view .mui-media-object {
        width: 80px;
        height: 80px;
        max-width: 80px;
        line-height: 80px;
    }
    .ft{
        font-size: 12px;
        margin-top: 1em;
        color:#0094ff;
    }
    .click-number{
        margin-left: 10px;
    }
</style>
