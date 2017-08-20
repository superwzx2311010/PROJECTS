<template>
    <div class="templateDiv">

        <div class="goodslist">
            <div class="goods" v-for="item in goodsList">
                <router-link v-bind="{ to:'/goods/goodsInfo/'+item.id}">
                <div class='goods-in'>
                    <img :src="item.img_url" alt="">
                    <div class="des">
                        <div class="title">{{item.title}}</div>
                        <div class="bg">
                            <div class="price"><span>￥{{item.sell_price}}</span> <s>￥{{item.market_price}}</s></div>
                            <div class="count"><span>热卖中</span><span class="last">剩{{item.stock_quantity}}件</span></div>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                goodsList: [],
            }
        },
        methods: {
            getGoodsList() {
                var url = this.$urlPrefix + '/api/getgoods?pageindex=1';
                this.$http.get(url).then(function (res) {
                    this.goodsList = res.body.message;
                    console.log(res.body.message);
                });
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>
<style scoped>
    .goodslist {
        display: flex;
        flex-wrap: wrap;

    }

    .goods {
        width: 50%;
        height: 350px;
        box-sizing: border-box;
    }

    .goods-in {
        margin: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
    }

    .goods img {
        width: 100%;
        padding: 5px;

    }

    .goods .des .title {
        height: 42px;
        overflow: hidden;
    }

    .goods .des .bg {
        background-color: rgba(0, 0, 0, 0.1);
        margin: 0 5px;
    }

    .goods .des div {
        margin: 10px;
    }

    .goods .des .price span {
        color: red;
        margin-right: 10px;
    }

    .goods .des .price s {
        color: #a2a2a2;
        font-size: 10px;
    }

    .goods .des .count {
        color: #a2a2a2;
        font-size: 10px;
    }

    .goods .des .count .last {
        float: right;
    }
</style>
