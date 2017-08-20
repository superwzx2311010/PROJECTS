<template>
    <div class="templateDiv">
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for="item in slideList">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/NewsList">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻列表</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photoList">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodList">
                        <span class="mui-icon mui-icon-chatbubble"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                slideList: [1, 2, 3, 4, 5]
            }
        },
        created() {
            this.getSlideList();
        },
        methods: {
            getSlideList() {
                var url = "http://139.199.192.48:8888/api/getlunbo";
                this.$http.get(url).then(function (response) {
                    this.slideList = response.body.message;
                })
            }
        }
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

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: 0px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0px;
    }

    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before,
    .mui-icon-home:before {
        content: "";
        width: 40px;
        height: 40px;
        display: block;
        background-size: 40px 40px;
    }

    .mui-icon-home:before {
        background-image: url("../../static/imgs/1.png");
    }

    .mui-icon-email:before {
        background-image: url("../../static/imgs/2.png");
    }

    .mui-icon-chatbubble:before {
        background-image: url("../../static/imgs/3.png");
    }

    .mui-icon-location:before {
        background-image: url("../../static/imgs/4.png");
    }

    .mui-icon-search:before {
        background-image: url("../../static/imgs/5.png");
    }

    .mui-icon-phone:before {
        background-image: url("../../static/imgs/6.png");
    }
</style>
