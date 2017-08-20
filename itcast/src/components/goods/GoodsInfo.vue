<template>
    <div class="templateDiv">
        <div class="slider">
            <slider :imgs="gimgs"></slider>
        </div>
        <div class="buy">
            <h4>{{goodsInfo.title}}</h4>
            <div class="price">
                <span class="one">市场价:<s>{{goodsInfo.market_price}}</s></span>
                <span class="two">销售价: <strong>{{goodsInfo.sell_price}}</strong></span>
            </div>
            <div class="count"><span>购买数量:</span>
                <InputNumber @dataCount="getCount" :goodsid="goodsInfo.id"></InputNumber>
                <transition @before-enter="beforeEnter" @enter="enter" @after-enter='afterEnter'>
                    <div v-show="show" class="ball"></div>
                </transition>
            </div>

            <div class="buying">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
            </div>
        </div>
        <div class="par">
            <h5>商品参数</h5>
            <div class="num">商品货号:{{goodsInfo.goods_no}}<span></span></div>
            <div class="count">库存情况:{{goodsInfo.stock_quantity}}</div>
            <div class="time">上架时间:{{goodsInfo.add_time}}</div>
        </div>
        <div class="button">
            <router-link v-bind="{to:'/goods/goodsDesc/'+goodsInfo.id}">
                <mt-button type="primary" plain size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodsComment/'+goodsInfo.id}">
                <mt-button type="danger" plain size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>

</template>
<script>
    import slider from "../../subcomponents/slider.vue";
    import InputNumber from "../../subcomponents/InputNumber.vue";
    import {addNumber, getLeft, getTop} from "../../../static/utils";

    export default {
        components: {
            slider,
            InputNumber,
        },
        data() {
            return {
                goodsId: 0,
                gimgs: [],
                goodsInfo: {},
                inputNumberCount: 0,
                show: false,
            }
        },
        methods: {
            getimgs() {
                var url = this.$urlPrefix + '/api/getthumimages/' + this.goodsId;
                this.$http.get(url).then(function (res) {
                    this.gimgs = res.body.message;
                    var temUrlList = [
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508688896624&di=dc08f6f3d6a837a8148c1390f9b7e7af&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2014%2F08%2F28%2Ff0e229b1f39a6843d9d333dff69ae761.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503569578867&di=6f8df914e1e71023449dcbea5446ca72&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff3%2F73%2Fd%2F27.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504164354&di=82b6477a9575ce6255bc9e73fbad8f92&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F50%2Fd%2F12.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503569663653&di=459c0fe3f5504fbb19c3f39f2e306d55&imgtype=0&src=http%3A%2F%2Fimg.51ztzj.com%2Fupload%2Fimage%2F20150215%2Fdn201502054013_670x419.jpg",
                        "https://a-ssl.duitang.com/uploads/item/201503/19/20150319183037_myRKj.thumb.700_0.jpeg",
                        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=310752781,927866181&fm=26&gp=0.jpg",
                    ];
                    this.gimgs = temUrlList;
                })
            },
            getGoodsInfo() {
                var url = this.$urlPrefix + "/api/goods/getinfo/" + this.goodsId;
                this.$http.get(url).then(function (res) {
                    this.goodsInfo = res.body.message[0];
                })
            },
            getCount(count) {
                console.log(count);
                this.inputNumberCount = count.split(":")[1];
            },
            addToCart() {
                addNumber(this.goodsInfo, this.inputNumberCount);
                window.eventCart.$emit("cartUpdated","");
                this.show = true;

            },
            beforeEnter(el) {
                el.style.transform = "translate(0px,0px)"
            },
            enter(el, done) {
                el.offsetWidth;
                var targetX =localStorage.getItem("badgeLeft")-getLeft(el);
                var targetY =localStorage.getItem("badgeTop")-getTop(el)+window.scrollY;
                el.style.transform = "translate(" + targetX + "px," + targetY + "px)";
                done();
            },
            afterEnter() {
                this.show = false;
            }
        },
        created() {
            this.goodsId = this.$route.params.goodsid;
            this.getimgs();
            this.getGoodsInfo();
        },
        mounted() {

        }


    }
</script>
<style scoped>
    .slider {
    }

    .buy {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

    .buy h4 {
        color: #0094ff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        padding: 5px;
    }

    .buy .price, .count, .buying {
        padding: 5px;
    }

    .buy .price .one {
        font-size: 12px;
    }

    .buy .price .two {
        font-size: 12px;
    }

    .buy .price .two > strong {
        font-size: 16px;
        color: red;
    }

    .buy .count {
        font-size: 12px;
        display: flex;
        height: 31px;
        line-height: 31px;
        position: relative;
    }

    .par {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

    .par h5 {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        padding: 5px;
    }

    .par .num, .par .count, .par .time {
        font-size: 12px;
        color: #ccc;
        padding-left: 40px;
    }

    .button {
        margin: 5px;
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }

    .button button {
        margin: 5px 0;
    }

    .ball {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        position: absolute;
        left: 125px;
        top: 10px;
        transition: all 500ms;
        z-index: 1000;
    }
</style>
