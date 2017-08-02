$(function () {
    var couponId=getUrlParams("couponId");
    $.ajax({
        dataType:"json",
        url: 'http://127.0.0.1:3000/api/getcouponproduct',
        data:{
            couponid:couponId
        },
        success:function (data) {
            console.log(data);
            var couponHtml=template("couponproduct-list-template",data)
            $("#couponproduct-list .couponproduct-container").append(couponHtml)
        }
    })
})