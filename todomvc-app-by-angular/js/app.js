(function (angular) {
	'use strict';
	var mod1 = angular.module("mod1", ["mod2"]);
	mod1.controller("cont1", ["$scope", "$location","service",function ($scope,$location,service) {
		$scope.todos =service.todos;
		$scope.newTodo = "";
		$scope.add = function () {
			service.add($scope.newTodo);
			$scope.newTodo = "";
		}
		$scope.isEditingId = "";
		$scope.edit = function (id) {
			$scope.isEditingId = id
		}
		$scope.save = function () {
			$scope.isEditingId = "";
		}
		$scope.del = function (id) {
			service.del(id);
		}
		$scope.isChechAll = false;
		$scope.cheAll = function () {
			service.cheAll($scope.isChechAll)
		}
		$scope.allNotCom = function () {
			return service.getNum();
		}
		$scope.cAllComp = function () {
			service.delAll();
		}
		// $scope.filter = function (a) {
		// 	if (a === "All") {
		// 		$scope.isCompleted = {}
		// 	}
		// 	if (a === "Active") {
		// 		$scope.isCompleted = {completed: false}
		// 	}
		// 	if (a === "Completed") {
		// 		$scope.isCompleted = {completed: true}
		// 	}
		// }
		$scope.loca=$location;
		$scope.$watch("loca.url()",function (now) {
			switch (now){
				case "/active":
					$scope.isCompleted = {completed: false}
					break;
				case "/completed":
					$scope.isCompleted = {completed: true}
					break;
				case "/":
					$scope.isCompleted = {}
					break;
			}
		})






	}])


})(angular);
