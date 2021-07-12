const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");

const input = documen.getElementById("input");

const element = document.getElementById("element");

element.insertAdjacentHTML(position, text);

function addToDo(toDo) {
  const text = 
    `<li class="item">
      <i class="far fa-circle" aria-hidden="true" job="complete"></i>
      <p class="text">${toDo}</p>
      <i class="far fa-trash-alt" aria-hidden="true" job="delete"></i>
    </li>`
  

  const position = "beforeend";

  list.insertAdjacentHTML(position, text);
}

addToDo("Drink Coffee");


document.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }
}

