
todoactive = "todo_active";

tododone = "todo_done";

newtodo = "newtodo";

function createtodo(todoitem,index) {
    var todoelem = document.createElement('div');
    var editbutton = document.createElement('button');
    var todoname = document.createElement('span');
    todoname.innerHTML = todoitem.name + ' ';
    todoname.setAttribute("id",'todo'+index);
    editbutton.setAttribute('onclick',"edittodo("+index+");return false;");
    editbutton.setAttribute('id','editbutton'+index);
    editbutton.innerHTML = 'Edit';
    var donebutton = document.createElement('button');
    if(todoitem.status){
        donebutton.innerHTML = 'Undone';
    }
    else{
        donebutton.innerHTML = 'Done';
    }

    donebutton.setAttribute('onclick',"donetodo("+index+");return false;");
    donebutton.setAttribute('id','donebutton'+index+'');
    todoelem.appendChild(todoname);
    todoelem.appendChild(editbutton);
    todoelem.appendChild(donebutton);
    return todoelem;
}

function filllist(){
    var todoa = document.getElementById(todoactive);
    todoa.innerHTML = "";
    var todod = document.getElementById(tododone);
    todod.innerHTML = "";
    var todolist = getList();
    for(var i in todolist){
        var z = document.createElement('li');
        z.appendChild(createtodo(todolist[i],i));
        if(todolist[i].status==false){
            todoa.appendChild(z);
        }
        else{
            todod.appendChild(z);
        }

    }
}

function addtodo(){
    //alert( document.getElementById("newtodo").value );
    if(document.getElementById(newtodo).value.length !=0){
        addTodo(document.getElementById(newtodo).value);
    }
    filllist();
    document.getElementById(newtodo).value = '';
}

function donetodo(index){
    getList()[index].status = !getList()[index].status;
    filllist();
}

function edittodo(index){
    var cname = getList()[index].name;
    var pro = prompt("Please Enter New ToDo name",cname);
    getList()[index].name = pro;
    filllist();
}

window.onload = filllist();