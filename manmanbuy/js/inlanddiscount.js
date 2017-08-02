$(function () {
    var pageId=1;
    var isLoading = false;
    var totalPage=null;

    function getProductList() {
        isLoading=true;
        setTimeout(function () {


            $.ajax({
                dataType: "json",
                url: "http://127.0.0.1:3000/api/getmoneyctrl",
                data:{
                    categoryid:0,
                    pageid:pageId,
                },
                success:function (data) {
                    console.log(data);

                    var prodectHtml=template("prodect-list-template",data);
                    $("#prodect .prodect-list").append(prodectHtml);
                    totalPage=Math.ceil(data.totalCount/data.pagesize);
                    isLoading = false;
                    // $("#prodect .loading-info img").css({display:"none"});
                }
            })
        },500)

    }


    getProductList();
    $(window).scroll(function () {
          var footerHeight=$("#footer").height();

          var totalHeight=$(document).height();
          var visibleHeight=$(window).height();
          var scrollTop=$(window).scrollTop();



        if(scrollTop>=totalHeight-visibleHeight-footerHeight){
            if(isLoading==false){
                if(pageId>=totalPage){
                     $("#prodect .loading-info img").css({display:"none"});
                     $("#prodect .loading-info .loading-over").css({display:"block"});
                }else{
                    pageId+=1;
                    getProductList();
                }

          }

          }






    })





})