$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/api/getcategorytitle",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var html=template("category-template",data);
            $("#accordion").html(html);
            $("#category>.panel-group>.panel>.panel-heading>.panel-title>a").click(function () {
                var titleId=this.dataset["myTitleId"];
                // console.log(titleId);
                var tarcontainerTitleId=this.href.split("#")[1];
                // console.log(containerTitleId);
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getcategory",
                    dataType:"json",
                    data:{
                        titleid:titleId
                    },
                    success: function (data) {
                        var targetContainerHtml=$("#category>.panel-group>.panel>#"+tarcontainerTitleId+">.panel-body").html();
                        // console.log(tarcontainerTitleId);
                        // console.log(targetContainerHtml);
                        console.log(data);
                        if(targetContainerHtml==""){
                            var childcategoryHTML=template("chlid-category-template",data);
                            // console.log(childcategoryHTML);
                            $("#category>.panel-group>.panel>#"+tarcontainerTitleId+">.panel-body").html(childcategoryHTML);
                        }

                    }
                })
            })

        }
    })
})