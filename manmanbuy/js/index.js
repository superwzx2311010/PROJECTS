$(function () {
 $.ajax({
     type:"get",
     url:"http://127.0.0.1:3000/api/getindexmenu",
     dataType: "json",
     success:function (data) {
         console.log(data);
         var html=template("menu-template",data);

        $("#menu .row").html(html);
        $("#menu .row .col-xs-3:nth-last-of-type(-n+4)").css({
            height:"0px",
        })
        $("#menu .row .col-xs-3:nth-of-type(8)").click(function () {
             var norHeight=$("#menu .row .col-xs-3:nth-of-type(8)").height();
             var lastHeiht=$("#menu .row .col-xs-3:last-of-type").height();
             if(lastHeiht==0){
                 $("#menu .row .col-xs-3:nth-last-of-type(-n+4)").css({
                     height:norHeight+"px",
                 })
             }else{
                 $("#menu .row .col-xs-3:nth-last-of-type(-n+4)").css({
                     height:"0px",
                 })
             }
            console.log("haha");
             return false;
        })
     }
 });
 $.ajax({
        type:"get",
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        dataType: "json",
        success:function (data) {
            console.log(data);
            var html=template("list-template",data);

            $("#recommend .recommend-list").html(html);

        }
    });
});

