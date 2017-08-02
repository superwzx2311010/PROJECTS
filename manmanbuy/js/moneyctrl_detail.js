$(function () {
    var productid=getUrlParams("productid");
    $.ajax({
        dataType:"json",
        url: "http://127.0.0.1:3000/api/getmoneyctrlproduct",
        data:{
            productid:productid,
        },
        success:function (data) {
            console.log(data);
            var productHtml=template("moneyctrl-detail-template",data);
            console.log(productHtml);
            $("#moneyctrl_detail .product").append(productHtml)

        }
    })
})