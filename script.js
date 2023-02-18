console.log('welcom');
console.log('ana wesa')
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
function addTodo(e){
    e.preventDefault();
console.log(todoInput.value)
todoInput.value= ''
}
todoBtn.addEventListener('click' ,addTodo)