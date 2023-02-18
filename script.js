console.log('welcom');
console.log('ana wesa')
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
function addTodo(e){
    e.preventDefault();
console.log('add todo')
}
todoBtn.addEventListener('click' ,addTodo)