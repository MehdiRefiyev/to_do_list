let addtodo = document.querySelectorAll('.btn-primary')[0];
let deleteall = document.querySelectorAll('.btn-primary')[1];
deleteall.addEventListener('click' , deleteallfunc);
let inputarea = document.querySelectorAll('.form-control')[0];
let todo_place = document.getElementById('todo_place');
let erroralert = document.getElementById('error');
addtodo.addEventListener('click' , addfunc);
function deleteallfunc(){
    while (todo_place.firstElementChild !== null) {
        todo_place.firstElementChild.remove();
    }
 }
function addfunc() {
    let temp1 = inputarea.value.split(" ");

    const found = temp1.filter(element => element.length >= 1);

    if(inputarea.value === '' || found.length == 0 ){
        console.log("duzd deyil");
        erroralert.style.display = 'block';
    }
    else{
    erroralert.style.display = 'none';
    const item = inputarea.value;
    let newtodo = document.createElement("li");
    newtodo.className = "list-group-item d-flex justify-content-between";
    let closebuttom = document.createElement("a");
    closebuttom.onclick = function() { newtodo.remove(); };
    closebuttom.className = "delete-item";
    closebuttom.innerHTML = "<i class='fa fa-remove'></i>"
    let node = document.createTextNode(inputarea.value);    
    newtodo.appendChild(node);
    newtodo.appendChild(closebuttom);
    todo_place.appendChild(newtodo);
    // console.log(inputarea.value);
    inputarea.value = ''; /* bura bax silib */
    addstorage(item);
    
    }
}
function addstorage(item){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(item);
    localStorage.setItem( "todos" , JSON.stringify(todos));
}
let filter = document.getElementById('filter');
function myFunction() {
    let lastput = filter.value.toUpperCase();
    let newtodo = document.getElementsByClassName('list-group-item d-flex justify-content-between');
    for (let index = 0; index < newtodo.length; index++) {
      const element = newtodo[index].firstChild.nodeValue.toUpperCase();
      if(element === lastput){
        console.log("duz");
        todo_place.prepend(newtodo[index]);
      }
      else{
        console.log('sehv');
      }
    }
}