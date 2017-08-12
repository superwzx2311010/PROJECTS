(function (angular) {
    var mod3=angular.module("mod3",["ngRoute","modSer"]);
    mod3.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/:moveList/:page?",{
            templateUrl:"./move_list/move_list.html",
            controller:"cont3"
        })
    }])
    mod3.controller("cont3",[
        "$scope",
        "$http",
        "myService",
        "$routeParams",
        "$route",
        function ($scope,$http,myService,$routeParams,$route) {
        $scope.pageSize=5;
        $scope.page=($routeParams.page||"1")-0;
        var startCon=($scope.page-1)*$scope.pageSize;
        myService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.moveList,{start:startCon,count:$scope.pageSize,q:$routeParams.q},function (data) {
                $scope.data=data;
                $scope.$apply();
                $scope.totalPage=Math.ceil($scope.data.total/$scope.pageSize)
            })
        $scope.getPage=function (nowPage) {
            if(nowPage<=0||nowPage>=$scope.totalPage){
                return
            }
            $route.updateParams({page:nowPage})
        }

    }])
})(angular)