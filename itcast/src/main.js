import Vue from "vue";
import App from "./App.vue";
import mintUi from "mint-ui";
import "../node_modules/mint-ui/lib/style.css";
import "../static/mui/css/mui.css";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Member from "./components/Member.vue";
import Cart from "./components/Cart.vue";
import Search from "./components/Search.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import NewsList from "./components/news/NewsList.vue";
import PhotoList from "./components/photo/photoList.vue";
import PhotoInfo from "./components/photo/photoInfo.vue";
import GoodsList from "./components/goods/goodslist.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDesc from "./components/goods/goodsdesc.vue";
import GoodsComment from "./components/goods/goodscomment.vue";
import VuewPreview from "vue-preview";
import "../static/site.css";
import VueResource from "vue-resource";
import moment from "moment";
import comment from "../static/comment.js";
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
Vue.use(comment);
Vue.use(VuewPreview);
Vue.filter("dateFmt",function (input,fmtString) {
    return moment(input).format(fmtString)
})
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
    linkActiveClass:"mui-active",
    routes: [
        {
            path:"/home",
            component:Home
        },
        {
            path:"/cart",
            component:Cart
        },
        {
            path:"/menber",
            component:Member
        },
        {
            path:"/search",
            component:Search
        },
        {
            path:"/news/NewsList",
            component:NewsList
        },
        {
            path:"/news/NewsInfo/:id",
            component:NewsInfo
        },
        {
            path:"/photo/photoList",
            component:PhotoList
        },
        {
            path:"/photo/photoInfo/:id",
            component:PhotoInfo
        },
        {
            path:"/goods/goodList",
            component:GoodsList
        },
        {
            path:"/goods/goodsInfo/:goodsid",
            component:GoodsInfo
        },
        {
            path:"/goods/goodsDesc/:goodsid",
            component:GoodsDesc
        },
        {
            path:"/goods/goodsComment/:goodsid",
            component:GoodsComment
        },
        {
            path:"/",
            redirect:"/home"
        }
    ]
})
Vue.use(mintUi);
new Vue({
    el: "#app",
    router:router,
    render: function (create) {
        return create(App);
    },
    created(){
        window.eventCart=this;
    }
})