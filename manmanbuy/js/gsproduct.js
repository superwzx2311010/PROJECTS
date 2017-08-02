$(function () {
    var isShopOpened = false;
    var isAreaOpened = false;
    $("#gsproduct-list .gsproduct-title .shop").click(function () {
        if (isShopOpened) {
            closeShopContent();
        } else {
            openShopContent();
        }

    })

    $("#gsproduct-list .gsproduct-title .area").click(function () {
        if (isAreaOpened) {
            closeAreaContent();
        } else {
            openAreaContent();
        }
    })


    var shopId = 0;
    var areaId = 0;
    $.ajax({
        dataType: "json",
        url: "http://127.0.0.1:3000/api/getgsshop",
        success: function (data) {
            console.log(data);

            var shopHtml = template("shop-template", data);
            $("#gsproduct-list .shop-list").html(shopHtml);
            var titleShopName=data.result[0].shopName;
            $("#gsproduct-list .gsproduct-title .shop").text(titleShopName);
            $.ajax({
                dataType: "json",
                url: "http://127.0.0.1:3000/api/getgsshoparea",
                success: function (data) {

                    var areaHtml = template("area-template", data);
                    $("#gsproduct-list .area-list").html(areaHtml);
                    var titleAreaName=data.result[0].areaName;
                    $("#gsproduct-list .gsproduct-title .area").text(titleAreaName);
                    getProdectList(shopId, areaId);
                    $("#gsproduct-list .shop-list .shop-item").click(function () {
                        $("#gsproduct-list .shop-list .shop-item").removeClass("checked");
                        $(this).addClass("checked");
                        titleShopName=$(this).text();
                        $("#gsproduct-list .gsproduct-title .shop").text(titleShopName);
                        closeShopContent();
                        shopId = this.dataset["shopId"];
                        getProdectList(shopId, areaId);
                    })
                    $("#gsproduct-list .area-list .area-item").click(function () {
                        $("#gsproduct-list .area-list .area-item").removeClass("checked");
                        $(this).addClass("checked");
                        titleAreaName=$(this).text();
                        $("#gsproduct-list .gsproduct-title .area").text(titleAreaName);
                        closeAreaContent();
                        areaId = this.dataset["areaId"];
                        getProdectList(shopId, areaId);
                    })

                }
            })


        }
    })

    function getProdectList(shopId, areaId) {
        $.ajax({
            dataType: "json",
            url: "http://127.0.0.1:3000/api/getgsproduct",
            data: {
                shopid: shopId,
                areaid: areaId,
            },
            success: function (data) {
                var porductlistHtml = template("gsproduct-list-template", data);
                $("#gsproduct-list .gsproduct-container").html(porductlistHtml);
            }
        })
    }


    function openShopContent() {
        closeAreaContent();
        $("#gsproduct-list .shop-list").css("display", "block");
        $("#gsproduct-list .gsproduct-title .shop").addClass("opened");
        isShopOpened = true;
    }

    function closeShopContent() {
        $("#gsproduct-list .shop-list").css("display", "none");
        $("#gsproduct-list .gsproduct-title .shop").removeClass("opened");
        isShopOpened = false;
    }

    function openAreaContent() {
        closeShopContent();
        $("#gsproduct-list .area-list").css("display", "block");
        $("#gsproduct-list .gsproduct-title .area").addClass("opened");
        isAreaOpened = true;
    }

    function closeAreaContent() {
        $("#gsproduct-list .area-list").css("display", "none");
        $("#gsproduct-list .gsproduct-title .area").removeClass("opened");
        isAreaOpened = false;
    }

})


// openShopContent
