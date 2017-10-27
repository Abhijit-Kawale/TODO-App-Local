interface todo {
    name: string;
    status: boolean
}

class TodoList {
    public todolist: todo[];

    constructor(todolist: todo[] ){
        this.todolist = todolist;
    }

    add(item: todo){
        this.todolist.push(item);
    }

    update(index: number, newname: string){
        this.todolist[index].name = newname;
    }

    done(index: number){
        this.todolist[index].status = true;
    }

    getlist() : todo[]{
        return this.todolist;
    }


}

var localtodo = new TodoList([{name:'Do Asgn',status: false}]);

function addTodo(todoname: string){
    localtodo.add({name: todoname,status: false});
}

function doneTodo(index: number){
    localtodo[index].status = true;
}

function updateTodo(index: number, newname: string){
    localtodo[index].name = newname;
}

function getTodo(index: number) : string{
    return localtodo[index].name;
}

function  getList() : todo[]{
    return localtodo.getlist();
}