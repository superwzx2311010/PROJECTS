$(function () {
    var brandtitleid=getUrlParams("brandTitleId");
    console.log(brandtitleid);
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrand",
        data:{
            brandtitleid:brandtitleid
        },
        success:function (data) {
            console.log(data);
        }
    })
})