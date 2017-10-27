var TodoList = /** @class */ (function () {
    function TodoList(todolist) {
        this.todolist = todolist;
    }
    TodoList.prototype.add = function (item) {
        this.todolist.push(item);
    };
    TodoList.prototype.update = function (index, newname) {
        this.todolist[index].name = newname;
    };
    TodoList.prototype.done = function (index) {
        this.todolist[index].status = true;
    };
    TodoList.prototype.getlist = function () {
        return this.todolist;
    };
    return TodoList;
}());
var localtodo = new TodoList([{ name: 'Do Asgn', status: false }]);
function addTodo(todoname) {
    localtodo.add({ name: todoname, status: false });
}
function doneTodo(index) {
    localtodo[index].status = true;
}
function updateTodo(index, newname) {
    localtodo[index].name = newname;
}
function getTodo(index) {
    return localtodo[index].name;
}
function getList() {
    return localtodo.getlist();
}
