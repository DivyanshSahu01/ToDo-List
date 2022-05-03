const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
var todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => {
        addToDo(todo)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo()
})

function addToDo(todo) {
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const todoEl = document.createElement('li')
        todoEl.innerText = todoText

        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })
        todosUL.appendChild(todoEl)
        updateLS()
        input.value = ''
    }
}

function updateLS() {
    var todosEL = document.querySelectorAll('li')
    todos = []
    todosEL.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    console.log("todos")
    localStorage.setItem('todos', JSON.stringify(todos))
}