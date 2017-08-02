$(function () {
    var  productid=getUrlParams("productid");
    $.ajax({
        dataType:"json",
        url: "http://127.0.0.1:3000/api/getproduct",
        data: {
            productid: productid,
        },
            success: function (data) {
            console.log(data);
                var displayName = data.result[0].productName.substring(0, 3);
                var prodectHtml="<li class=\"active\">"+displayName+"</li>";
                var categoryid=data.result[0].categoryId;
                $.ajax({
                    dataType:"json",
                    url:"http://127.0.0.1:3000/api/getcategorybyid",
                    data:{
                        categoryid: categoryid
                    },
                    success: function (data) {
                        console.log(data);
                        var categoryName=data.result[0].category;
                        var categoryNameHtml="<li><a href=\"category_product_list.html?categoryid="+categoryid+"\">"+categoryName+"</a></li>";
                        $("#category_product_detail .breadcrumb").append(categoryNameHtml);
                        $("#category_product_detail .breadcrumb").append(prodectHtml);





                    }
                });
                var prodectDesHtml=template("bj-prodectDes-template",data);
                $("#category_product_detail .prodect").html(prodectDesHtml)




            },

    });
    $.ajax({
        dataType:"json",
        url: "http://127.0.0.1:3000/api/getproductcom",
        data:{
            productid:productid,
        },
        success:function (data) {
            console.log("评论数据");
            console.log(data);
            var data1={};
            var result1=[];
            result1[0]=data.result[0];
            result1[1]=data.result[1];
            console.log(result1);
            data1.result1=result1;
            var data2={};
            var result2=[];
            for(var i=2;i<data.result.length;i++){
                result2[i-2]=data.result[i];
            }
            data2.result2=result2;
            console.log(data1);
            var assess1Ltml=template("assess1-template",data1);
            $("#category_product_detail .assess .assess-conner").append(assess1Ltml);
            $("#category_product_detail .assess .assess-more").click(function () {
                console.log("点击更多");
                console.log(data2);
                var assess1Ltm2=template("assess2-template",data2);
                console.log(assess1Ltm2);
                $("#category_product_detail .assess .assess-conner").append(assess1Ltm2);
                $("#category_product_detail .assess .assess-more").css({display:"none"});
                $("#category_product_detail .assess .assess-none").css({display:"block"});

            })





        }
    })
})