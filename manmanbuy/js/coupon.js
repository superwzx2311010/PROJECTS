$(function () {
    $.ajax({
        dataType: "json",
        url:"http://127.0.0.1:3000/api/getcoupon",
        success:function (data) {
            console.log(data);
            var couponHtml=template("coupon-template",data)
            $("#coupon-list .prodect .row").append(couponHtml)
        }
    })
})