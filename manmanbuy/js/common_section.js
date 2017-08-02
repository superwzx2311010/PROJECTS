$(function () {
    var headerElement = $("#header");
    if (headerElement.length >= 1) {
        var headerClassName = headerElement.attr("class");
        var headerName = document.title;
        if (headerClassName && headerClassName == "back") {
            var headerHTML =
                '<a href="javascript:history.back()" class="back"></a>' +
                '<span class="ctrl">' + headerName + '</span>' +
                '<a href="#" class="app">' +
                '<img src="images/header_app.png" alt="">' +
                '</a>';
        } else {
            var headerHTML =
                '<a href="#" class="logo">' +
                '        <img src="images/header_logo.png" alt="">' +
                '        </a>' +
                '        <a href="#" class="app">' +
                '        <img src="images/header_app.png" alt="">' +
                '        </a>';
        }


        headerElement.append(headerHTML);
    }
    var searchElement = $("#search");
    if (searchElement) {
        var searchHTML =
            '<form action="">' +
            '<input type="search" name="" placeholder="请输入搜索商品的名称">' +
            '<input type="button" value="搜索">' +
            '</form>';
        searchElement.append(searchHTML);
    }
    var footerElement = $("#footer");
    if (footerElement) {
        var footerHTML =
            '<div class="row">' +
            '<div class="col-xs-4">' +
            '<a href="#">登录</a>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<a href="#">注册</a>' +
            '</div>' +
            '<div class="col-xs-4">' +
            '<a href="javascript:goTop();">返回顶部</a>' +
            '</div>' +
            '</div>' +
            '<div class="normal-info">' +
            '<span class="app-download">手机app下载</span>' +
            '<span class="website-des">慢慢买手机版-掌上比价平台</span>' +
            '</div>' +
            '<div class="website">m.manmanbuy.com</div>';
        footerElement.append(footerHTML);
    }
})

function getUrlParams(key) {
    var href = window.location.href;
    var paramStr = href.split("?")[1];
    var paramArr = paramStr.split("&");
    var paramObj = {};
    for (var i = 0; i < paramArr.length; i++) {
        var Key = paramArr[i].split("=")[0];
        var value = paramArr[i].split("=")[1];
        paramObj[Key] = value;
    }
    return paramObj[key];
}

function goTop() {
    $('body').animate({scrollTop: 0}, 200);
}