<template>
    <div class="templateDiv">
        <div class="title">
            <h4>{{photoInfo.title}}</h4>
            <p>{{photoInfo.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}} {{photoInfo.click}}次浏览</p>
            <p class="line"></p>
        </div>
        <p v-html="photoInfo.content"></p>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in infoPic">
                        <img :src="item.src" height="100px" class="preview-img" @click="$preview.open(index,infoPic)">
                </li>
            </ul>
        </div>
        <comment :myId="id"></comment>
    </div>
</template>
<script>
    import comment from "../../subcomponents/Comment.vue"

    export default {
        data() {
            return {
                id: 0,
                photoInfo: {},
                infoPic:[],
            }
        },
        methods: {
            getInfo() {
                var url = this.$urlPrefix + '/api/getimageInfo/' + this.id;
                this.$http.get(url).then(function (res) {
                    this.photoInfo = res.body.message[0];
                })
            },
            getInfoPic(){
                var url=this.$urlPrefix+"/api/getthumimages/"+this.id;
                this.$http.get(url).then(function (res) {
                    this.infoPic=res.body.message;
                    var temUrlList=[
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508688896624&di=dc08f6f3d6a837a8148c1390f9b7e7af&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2014%2F08%2F28%2Ff0e229b1f39a6843d9d333dff69ae761.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503569578867&di=6f8df914e1e71023449dcbea5446ca72&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff3%2F73%2Fd%2F27.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504164354&di=82b6477a9575ce6255bc9e73fbad8f92&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F50%2Fd%2F12.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503569663653&di=459c0fe3f5504fbb19c3f39f2e306d55&imgtype=0&src=http%3A%2F%2Fimg.51ztzj.com%2Fupload%2Fimage%2F20150215%2Fdn201502054013_670x419.jpg",
                        "https://a-ssl.duitang.com/uploads/item/201503/19/20150319183037_myRKj.thumb.700_0.jpeg",
                        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=310752781,927866181&fm=26&gp=0.jpg",
                    ];
                    this.infoPic.forEach(function (item,index) {
                        item.src=temUrlList[index];
                        var img=document.createElement("img");
                        img.src=item.src;
                        img.onload=function () {
                            item.h=img.height;
                            item.w=img.width;
                        }
                    })
                })
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getInfo();
            this.getInfoPic();
        },
        components: {
            comment
        }

    }
</script>
<style scoped>
    .title h4 {
        color: #0094ff;
    }

    .title p {
        color: rgba(0, 0, 0, 0.4);
        margin-top: 10px;
    }

    .title .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:0;
    }
    .mui-content img{
        width: 150px;
        height: 100px;
    }
</style>
