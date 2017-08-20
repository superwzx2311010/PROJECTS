<template>
    <div class="templateDiv">
        <h4>{{info.title}}</h4>
        <p class="line"></p>
        <p v-html="info.content"></p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                goodsId: 0,
                info: {},
            }
        },
        methods: {
            getInfo() {
                var url = this.$urlPrefix + '/api/goods/getdesc/' + this.goodsId;
                this.$http.get(url).then(function (res) {
                    this.info = res.body.message[0];
                })
            }
        },
        created() {
            this.goodsId = this.$route.params.goodsid;
            this.getInfo();
        }

    }
</script>
<style scoped>
    h4 {
        color: #0094ff;
    }
    .line{
        height: 1px;
        border-bottom: 1px solid #ccc;
    }
</style>
