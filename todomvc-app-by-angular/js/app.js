(function (angular) {
	'use strict';
	var mod1=angular.module("mod1",[]);
	mod1.controller("cont1",["$scope",function ($scope) {
		$scope.todos = [
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:true},
			{id:3,name:'打豆豆',completed:false},
			{id:4,name:'学习',completed:true},
			{id:5,name:'喝水',completed:false},
		]
		$scope.newTodo="";
		$scope.add=function () {
			console.log(111);
			if(!$scope.newTodo){
				return
			}
			$scope.todos.push({
				name:$scope.newTodo,
				id:Math.random(),
				completed:false
			})
			$scope.newTodo="";
		}
		$scope.isEditingId="";
		$scope.edit=function (id) {
			$scope.isEditingId=id
		}
		$scope.save=function () {
			$scope.isEditingId="";
		}
		$scope.del=function (id) {
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id==id){
					$scope.todos.splice(i,1);
				}
			}
		}
		$scope.isChechAll=false;
		$scope.cheAll=function () {
			for(var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed=$scope.isChechAll;
			}
		}
		$scope.allNotCom=function () {
			var count=0
			for(var i=0;i<$scope.todos.length;i++){
				if(($scope.todos[i].completed)===false){
					count++;
				}
			}
			return count
		}
		$scope.cAllComp=function () {
			for(var i=$scope.todos.length-1;i>=0;i--){
				if($scope.todos[i].completed==true){
					$scope.todos.splice(i,1);
				}
			}
		}
		$scope.filter=function (a) {
			if(a==="All"){
				$scope.isCompleted={}
			}
			if(a==="Active"){
				$scope.isCompleted={completed:false}
			}
			if(a==="Completed"){
				$scope.isCompleted={completed:true}
			}
		}

	}])


})(angular);
