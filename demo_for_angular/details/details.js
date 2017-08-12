(function (angular) {
 var mod4=angular.module("mod4",["ngRoute","modSer"]);
 mod4.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when(
                "/details/:id",
            {
                templateUrl:"./details/details.html",
                controller:"cont4"
            }
        )
    }])
    mod4.controller("cont4",[
        "$scope",
        "$http",
        "myService",
        "$routeParams",
        "$route",
        function ($scope,$http,myService,$routeParams,$route) {
         myService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function (data) {
             $scope.data=data;
             $scope.$apply();
         })

    }])

})(angular)