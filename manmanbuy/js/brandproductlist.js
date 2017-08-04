$(function () {
    var brandtitleid=getUrlParams("brandTitleId");
    var brandtitle=null;
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandtitle",
        success: function (data) {
            brandtitle=data.result[brandtitleid].brandTitle;
            var title = brandtitle.split("十")[0]+"哪个好";
            var title2=brandtitle.split("十")[0]+"产品销量排行";
            var title3=brandtitle.split("十")[0]+"最新评论";
            $("#brandproductlist .brandproduct-nav span").text(title);
            $("#brandproductlist .brandproduct-title").text(title);
            $("#brandproductlist .brandproduct-title2").text(title2);
            $("#brandproductlist .productcom-title").text(title3);


        }
    })
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrand",
        data:{
            brandtitleid:brandtitleid
        },
        success:function (data) {
            console.log(data);
            var prodectHtml=template("prodect-list-template",data);
            $("#brandproductlist .brandproduct-list").html(prodectHtml);
        }
    })
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandproductlist",
        data:{
            brandtitleid:brandtitleid,
            pagesize:4,
        },
        success:function (data) {
            console.log(data);
            var product2Html=template("product-list2-template",data)
            $("#brandproductlist .brandproduct-list2").html(product2Html);
            var product3Html=template("product-list3-template",data)
            $("#brandproductlist .productcom .productcom-des").html(product3Html);
            var productid=data.result[0].productId;
            $.ajax({
                url:"http://127.0.0.1:3000/api/getproductcom",
                data:{
                    productid:productid,
                },
                success: function (data) {
                    console.log(data);
                    var productcomHtml=
                    '<div class="time">'+
                        '<span>'+data.result[0].comName+'</span>'+
                        '<span>'+data.result[0].comTime+'</span>'+
                    '</div>'+
                    '<div class="words">'+data.result[0].comContent+'</div>';
                    $("#brandproductlist .productcom .productcom-words").html(productcomHtml)
                }
            })
        }
    })
})