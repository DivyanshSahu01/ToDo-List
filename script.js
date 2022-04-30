const list=document.querySelector('.list');
const addbtn=document.querySelector('.add');
const clearbtn=document.querySelector('.clear');
const input=document.querySelector('input');
var todos=[];

clearbtn.addEventListener('click',clear);

function clear(){
    todos=[];
    localStorage.setItem('list',JSON.stringify(todos));
    window.location='http://127.0.0.1:5500/index.html';
}

if(JSON.parse(localStorage.getItem('list')) != null){
    todos=JSON.parse(localStorage.getItem('list'));
    for(i=0;i<JSON.parse(localStorage.getItem('list')).length;i++){
        list.innerHTML += '<div class="list__item">' +JSON.parse(localStorage.getItem('list'))[i]+ '</div>'
    }
}

const list__items=document.querySelectorAll('.list__item');

for(i=0;i<list__items.length;i++){
    list__items[i].addEventListener('click',function(e){
        e.target.classList.toggle('completed');
    });
}

addbtn.addEventListener('click',addToDo);

function addToDo(){
    if(input.value == ''){
        return;
    }
    list.innerHTML += '<div class="list__item">'+input.value+'</div>'
    todos.push(input.value);
    localStorage.setItem('list',JSON.stringify(todos));
}