console.log('welcom');
console.log('ana wesa')
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoResult = document.querySelector('.todo-result')
function addTodo(e){
    e.preventDefault();
    const todoLi = document.createElement("li")
    todoLi.classList.add('border')
    todoLi.classList.add('py-2')
    todoLi.classList.add('px-4')
console.log(todoInput.value)
todoInput.value= ''
}
todoBtn.addEventListener('click' ,addTodo)