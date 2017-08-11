(function (angular) {
    var mod2=angular.module("mod2",["ngRoute"]);
    mod2.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/home_page",{
            templateUrl:"./home_page/home_page.html"
        })
    }])
})(angular)