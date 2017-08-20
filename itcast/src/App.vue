<template>
    <div>
        <mt-header fixed title="fixed top"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">{{totalCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    import { getTotalCount,getTop,getLeft } from "../static/utils"
    export default {
        data(){
            return{
                totalCount:0
            }
        },
        created(){
            this.totalCount=getTotalCount();
            window.eventCart.$on("cartUpdated",function () {
                var badge=document.querySelector(".mui-badge");
                badge.innerText=getTotalCount();
            })
        },
        mounted(){
            var badge=document.querySelector(".mui-badge");
            localStorage.setItem("badgeLeft",getLeft(badge));
            localStorage.setItem("badgeTop",getTop(badge));
        }

    }
</script>
<style scoped>

</style>    