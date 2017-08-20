<template>
    <div class="templateDiv">

        <div class="row"  v-for="item in dataList">
                <mt-switch class="switch" v-model="item.checked" @change='switchChange'></mt-switch>
                <img class="img" alt="商品图片">
                <div class="inforight">
                    <h4>{{item.title}}</h4>
                    <div class="bottom">
                        <ul>
                            <li>￥200元</li>
                            <li>
                                <inputnumber @dataCount="getCount" :initcount="item.count" :goodsid="item.id"></inputnumber>
                            </li>
                            <li>
                                <a href="javascript:void(0)">删除</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="total">
                <div class="desc">
                    <ul>
                        <li>总计（不含运费）</li>
                        <li>已勾选商品{{count}}件,总价:￥{{amount}}元</li>
                    </ul>
                </div>
                <div id="button">
                    <mt-button  type="danger" size="small">去结算</mt-button>
                </div>
            </div>

    </div>
</template>
<script>
import inputnumber from "../subcomponents/InputNumber.vue";
import {getAll,upDateTo} from  "../../static/utils.js"
    export default{
        data(){
            return{
                dataList:[1,2,3,4],
                count:0,
                amount:0,
            }
        },
        components:{
            inputnumber
        },
        created(){
            this.dataList=getAll();
            for(var key in this.dataList){
                this.dataList[key].checked=false;
            }
        },
        methods:{
            getCount(input){
                var targetGoodsId=input.split(":")[0];
                var targetGoodsCount=input.split(":")[1];
                upDateTo(targetGoodsId,targetGoodsCount);
                this.dataList[targetGoodsId].count=targetGoodsCount;
                window.eventCart.$emit("cartUpdated","");
                this.calc();
            },
            switchChange(){
                this.calc();
            },
            calc(){
                var totalCount=0;
                var totalAmount=0;
                for(var key in this.dataList){
                    var item=this.dataList[key];
                    if(item.checked){
                        totalCount+=item.count;
                        totalAmount+=parseInt(item.count) * parseInt(item.price);;
                    }
                };
                this.count=totalCount;
                this.amount=totalAmount;
            }
        }
    }
</script>
<style scoped>
.row{
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    height: 100px;
    padding: 5px;
}
.switch{
    flex:0 0 52px;
}
.img{
    margin-left: 5px;
    height: 75px;
    width: 75px;
    flex: 0 0 85px;
}
.inforight{
    margin-left: 5px;
    flex:1;
}
.inforight ul{
    padding-left: 0px;
}
.inforight li{
    list-style: none;
    display: inline-block;
}
.inforight h4{
    color: #0094ff;
    font-size: 14px;
}
.bottom li:first-child{
    color:red;
    margin-right: 5px;
}
.bottom li:last-child{
    margin-left: 5px;
}
#total{
    height: 100px;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    padding: 5px;;
}
#total ul {
    padding-left: 0px;
}
#total li{
    list-style: none;
    font-size: 14px;
}
#button{
    flex:0 0 60px;
    margin: 30px 0 0 0 ;
}
.desc{
    flex:1;
}
</style>
