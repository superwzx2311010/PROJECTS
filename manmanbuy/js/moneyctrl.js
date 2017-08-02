
$(function () {
    var categoryId=1;
    var listPage=1;
    getProductList(categoryId,listPage);
    function getProductList(categoryid,listPage) {
        $.ajax({
            url:"http://127.0.0.1:3000/api/getmoneyctrl",
            dataType:"json",
            data: {
                categoryid:categoryid,
                pageid:listPage,
            },
            success:function (data) {
                console.log(data);
                var prodectListHtml=template("category-prodect-list-complate",data);
                $("#category-prodect-list .category-prodect-list-container").html(prodectListHtml);
                goTop();
                var totalCount=data.totalCount;
                var pagesize=data.pagesize;
                var pageCount=Math.ceil(totalCount/pagesize);
                var optionHtml="";
                console.log(listPage);
                for(var i=0;i<pageCount;i++) {
                    if((i+1)==listPage) {
                        optionHtml += '<option value='+(i+1)+' selected>第'+(i+1)+ '页/共'+ pageCount + '页</option>';
                    } else {
                        optionHtml += '<option value='+(i+1)+'>第'+(i+1)+ '页/共'+ pageCount + '页</option>';
                    }

                }
                $("#category-prodect-list .category-prodect-list-next .pager #select").html(optionHtml);


                if(pageCount==1){
                    $("#category-prodect-list .category-prodect-list-next .pager .next").addClass("disabled");

                }


                // console.log(prodectListHtml);

                $("#category-prodect-list .category-prodect-list-next .pager .previous a").unbind("click").bind("click",function () {
                    console.log("haha");

                    if(listPage<=1){
                        $("#category-prodect-list .category-prodect-list-next .pager .previous").addClass("disabled");
                    }else{
                        $("#category-prodect-list .category-prodect-list-next .pager .next").removeClass("disabled");
                        listPage=parseInt(listPage)-1;
                        // $.ajax({
                        //     url:"http://127.0.0.1:3000/api/getproductlist",
                        //     data: {
                        //         categoryid:categoryid,
                        //         pageid:listPage,
                        //     },
                        //     success:function (data) {
                        //         // console.log(data);
                        //         var prodectListHtml=template("category-prodect-list-complate",data);
                        //         $("#category-prodect-list .category-prodect-list-container").html(prodectListHtml);
                        //         if(listPage==1){
                        //             $("#category-prodect-list .category-prodect-list-next .pager .previous").addClass("disabled");
                        //
                        //         }
                        //     }
                        // })
                        getProductList(categoryId,listPage)
                        if(listPage==1){
                                         $("#category-prodect-list .category-prodect-list-next .pager .previous").addClass("disabled");

                                    }
                    }

                    return false;
                })
                $("#category-prodect-list .category-prodect-list-next .pager .next a").unbind("click").bind("click",function () {
                    console.log("haha");

                    if(listPage>=pageCount){
                        $("#category-prodect-list .category-prodect-list-next .pager .next").addClass("disabled");
                    }else{
                        $("#category-prodect-list .category-prodect-list-next .pager .previous").removeClass("disabled");
                        listPage=parseInt(listPage)+1;
                        // $.ajax({
                        //     url:"http://127.0.0.1:3000/api/getproductlist",
                        //     data: {
                        //         categoryid:categoryid,
                        //         pageid:listPage,
                        //     },
                        //     success:function (data) {
                        //         // console.log(data);
                        //         var prodectListHtml=template("category-prodect-list-complate",data);
                        //         $("#category-prodect-list .category-prodect-list-container").html(prodectListHtml);
                        //         if(listPage==pageCount){
                        //             $("#category-prodect-list .category-prodect-list-next .pager .next").addClass("disabled");
                        //
                        //         }
                        //     }
                        // })
                    getProductList(categoryId,listPage)
                        if(listPage==pageCount){
                                         $("#category-prodect-list .category-prodect-list-next .pager .next").addClass("disabled");

                                    }
                    }

                    return false;
                })
                $("#category-prodect-list .category-prodect-list-next .pager #select").unbind("change").bind("change",function(){
                    listPage=$(this).val();
                    getProductList(categoryId,listPage);
                })
            }
        })

    }
})