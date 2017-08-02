$(function () {
    $.ajax({
        url:"http://127.0.0.1:3000/api/getsitenav",
        success:function (data) {
            console.log(data);
            var siteNavHtml=template("sitenav-template",data);
            $("#sitenav").html(siteNavHtml)
        }
    })
})