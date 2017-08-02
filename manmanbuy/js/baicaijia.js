$(function () {
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var currentX=0;
    var titleWidth=$("#prodect .prodect-title").width();
    var ulWidth=0;
    $("#prodect .prodect-title .prodect-nav").on("touchstart",function (e) {
       startX=e.originalEvent.touches[0].clientX;
    });
    $("#prodect .prodect-title .prodect-nav").on("touchmove",function (e) {
        moveX=e.originalEvent.touches[0].clientX;
        distanceX=moveX-startX;
        $("#prodect .prodect-title ul").css({
            transition:"none",
            left:distanceX+currentX,

        })
    });
    $("#prodect .prodect-title .prodect-nav").on("touchend",function (e) {
            // currentX+=distanceX;
            var left= parseInt($("#prodect .prodect-title ul").css("left"));
            var ulWidth=$("#prodect .prodect-title ul").width();
            console.log(ulWidth);
            console.log(left);
            if(distanceX+currentX>=0){
                $("#prodect .prodect-title ul").css({
                    left:0,
                    transition:"left 500ms"
                })
                currentX=0;
                // distanceX=0;
            }else if(distanceX+currentX<-(ulWidth-titleWidth)){
                $("#prodect .prodect-title ul").css({
                    left:-(ulWidth-titleWidth),
                    transition:"left 500ms"
                })
                currentX=-(ulWidth-titleWidth);
            }else{
                currentX+=distanceX;
            }

    })


$.ajax({
    dataType:"json",
    url: "http://127.0.0.1:3000/api/getbaicaijiatitle",
    success:function (data) {
        console.log(data);
        var titleHtml=template("baicai-title-template",data);
        $("#prodect .prodect-title .prodect-nav").html(titleHtml);
        var titleidFirst=data.result[0].titleId;
        $.ajax({
            dataType: "json",
            url:"http://127.0.0.1:3000/api/getbaicaijiaproduct",
            data:{
                titleid:titleidFirst,
            },
            success:function (data) {
                console.log(data);
                var prodectHtml=template("baicai-prodect-template",data);
                $("#prodect .prodect-list").html(prodectHtml);

            }
        })
        ulWidth=data.result.length*80;
        $("#prodect .prodect-title .prodect-nav").css("width",ulWidth+"px")
        // console.log(ulWidth);
        $("#prodect .prodect-title .prodect-nav li:first-of-type a").addClass("checked");
        $("#prodect .prodect-title .prodect-nav li a").click(function () {
            console.log("haha");

            $("#prodect .prodect-title .prodect-nav li a").removeClass("checked");
            $(this).addClass("checked");
            var titleId=this.dataset["titleId"];
            $.ajax({
                dataType: "json",
                url:"http://127.0.0.1:3000/api/getbaicaijiaproduct",
                data:{
                    titleid:titleId,
                },
                success:function (data) {
                    console.log(data);
                    var prodectHtml=template("baicai-prodect-template",data);
                    $("#prodect .prodect-list").html(prodectHtml);

                }
            })





            return false;
        })
        
        
        
        
    }
})




})