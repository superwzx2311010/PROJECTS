<template>
    <div class="count">
        <div class="sub" @click="substrict">-</div>
        <div class="num" >{{count}}</div>
        <div class="add" @click="add">+</div>
    </div>
</template>
<script>
    export default{
        props:["initcount","goodsid"],
        data(){
            return{
                count:1,
            }
        },
        methods:{
            substrict(){
                this.count--;
                if(this.count<1){
                    this.count=1
                }
                this.sendmessage();
            },
            add(){
                this.count++;
                this.sendmessage();
            },
            sendmessage(){
                this.$emit("dataCount",this.goodsid+":"+this.count)
            }
        },
        created(){
            if(this.initcount){
                this.count=this.initcount;
            }
        }
    }
</script>
<style scoped>
.count{
    display: flex;
}
    .count .sub,.count .add,.count .num{
        width: 50px;
        height: 20px;
        border: 1px solid red;
        border-radius: 5px;
        line-height: 20px;
        margin: 0 5px;
        text-align: center;
        cursor: pointer;
    }
.count .num{
    width: 20px;
}


</style>
