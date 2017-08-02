$(function () {
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandtitle",
        success:function (data) {
            console.log(data);
            var brandListHtml=template("brand-list-template",data)
            $("#brand-title .brand-list").html(brandListHtml)
        }
    })
})