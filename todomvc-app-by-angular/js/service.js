var mod2=angular.module("mod2",[]);
mod2.service("service",[function () {
   var str=localStorage.getItem("myData")||"[]";
   var todos=JSON.parse(str);
   this.todos=todos;

   	this.add=function (newTodo) {
		if (!newTodo) {
			return
		}
		this.todos.push({
			name: newTodo,
			id: Math.random(),
			completed: false
		})
		this.saveData();
	}
	this.del=function (id) {
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				this.todos.splice(i, 1);
			}
		}
		this.saveData();
	}
	this.cheAll=function (a) {
		for (var i = 0; i < this.todos.length; i++) {
			this.todos[i].completed = a;
		}
	}
	this.getNum=function () {
		var count = 0
		for (var i = 0; i < todos.length; i++) {
			if ((todos[i].completed) === false) {
				count++;
			}
		}
		return count
	}
	this.delAll=function () {
		for (var i = this.todos.length - 1; i >= 0; i--) {
			if (this.todos[i].completed == true) {
				this.todos.splice(i, 1);
			}
		}
		this.saveData()
	}

	this.saveData=function () {
		var str = JSON.stringify(this.todos);
		localStorage.setItem("myData", str);
	}
}])


