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

const todoTitel = document.createElement('h4')
todoTitel.classList.add("d-inline-block")
todoTitel.innerText = todoInput.value
todoLi.appendChild(todoTitel)

const btnComplete = document.createElement('button')
btnComplete.classList.add('btn')
btnComplete.classList.add('btn-primary')
btnComplete.innerHTML = '<i class="fa-solid fa-check"></i>'
todoLi.appendChild(btnComplete)


const btnDelet = document.createElement('button')
btnDelet.classList.add('btn')
btnDelet.classList.add('btn-danger')
btnDelet.innerHTML = '<i class="fa-solid fa-trash"></i>'
todoLi.appendChild(btnDelet)

todoResult.appendChild(todoLi)









console.log(todoInput.value)
todoInput.value= ''
}
todoBtn.addEventListener('click' ,addTodo)