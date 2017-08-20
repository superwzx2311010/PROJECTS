<template>
    <div class="templateDiv">
        <div class="category">
            <ul v-bind="{style:'width:'+ulWidth+'px'}">
                <li>全部</li>
                <li v-for="item in categories" @click="getPicList(item.id)">{{item.title}}</li>

            </ul>
        </div>
        <div class="imageList">
            <ul>
                <li v-for="item in picList">
                    <router-link v-bind="{to:'/photo/photoInfo/'+item.id}">
                        <img v-lazy="tempic" alt="">
                        <div class="des">
                            <h5>{{item.title}}</h5>
                            <p>{{item.zhaiyao}}</p>
                        </div>
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
                categories: [],
                ulWidth: 0,
                picList: [],
                tempic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508688896624&di=dc08f6f3d6a837a8148c1390f9b7e7af&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2014%2F08%2F28%2Ff0e229b1f39a6843d9d333dff69ae761.jpg",
                categoryId:0,
            }
        },
        methods: {
            getCaterory() {
                var url = this.$urlPrefix + "/api/getimgcategory";
                this.$http.get(url).then(function (res) {
                    this.categories = res.body.message;
                    var widthOne = 65;
                    var count = res.body.message.length + 1;
                    this.ulWidth = widthOne * count;
                })
            },
            getPicList(categoryId) {
                var url = this.$urlPrefix + '/api/getimages/' + categoryId;
                this.$http.get(url).then(function (res) {
                    this.picList = res.body.message;
                })
            },

        },

        created() {
            this.getCaterory();
            this.getPicList(0);
        }
    }
</script>
<style scoped>
    .category {
        width: 100%;
        overflow: auto;
    }

    .category ul {
        margin: 0px;
        padding-left: 10px;
        list-style: none;
        width: 1500px;
    }

    .category ul li {
        cursor: pointer;
        color: #0094ff;
        display: inline-block;
        font-size: 14px;
        padding-left: 6px;
        width: 62px;
    }

    .imageList ul {
        padding-left: 0;
        list-style: none;
    }

    .imageList ul li {
        position: relative;
    }

    .imageList img {
        width: 100%;
        height: 300px;
    }

    .des {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 2px;
        left: 0px;
    }

    .des h5 {
        color: #fff;
        font-weight: 700;
    }

    .des p {
        color: #fff;
        margin: 0;
    }
</style>
