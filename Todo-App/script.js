
let todos;
let savedTodos = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedTodos)){
    todos = savedTodos;
}
else{
    todos = [{
        title: 'learn javascript',
        dueDate: '2021-10-04',
        id: '1'
    }, {
        title:'complete MRP project',
        dueDate: '2021-03-04',
        id: '2'
    },
    {
        title:'take a break',
        dueDate:'2022-08-06',
        id: '3'
    }]; 
}

render();
// create todo
function createTodo(title, dueDate){
    let id = ' '+ new Date().getTime();
    todos.push({
        title:title,
        dueDate:dueDate,
        id: id
    });

    savaTodos();
}

function removeTodo(idToDelete){
    todos = todos.filter(function(todo){
        if(todo.id === idToDelete)
        {
            return false;
        }
        else{
            return true;
        }
    });
    savaTodos();
}

function savaTodos(){
    localStorage.setItem('todos',JSON.stringify(todos));
}

function addTodo(){
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    let datePicker = document.getElementById('date-picker');
    let dueDate = datePicker.value;

    createTodo(title,dueDate);
    render();
}

function deleteTodo(event){
    let deleteButton = event.target;
    let idToDelete = deleteButton.id;
    removeTodo(idToDelete);
    render();
    
}
function render(){
    document.getElementById('todo-list').innerHTML = ' ';
    todos.forEach(function(todo){
        let element = document.createElement('div');
        element.style = 'height:40px; width:600px;margin-top:10px;background: #0edfaa;border-radius: 5px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);'
        element.innerText = todo.title +' '+todo.dueDate;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 15px;'
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);
        let todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}