$(function () {
    var pageid=2;
    $.ajax({
        dataTape: "json",
        url: "http://127.0.0.1:3000/api/getmoneyctrl",
        data:{
            pageid:pageid,
        },
        success:function (data) {
            console.log(data);
            var listHtml=template("list-template",data);
            $("#prodact-list").append(listHtml);
        }
    })
})