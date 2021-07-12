// const clear = document.querySelector(".clear");

// const dateElement = document.getElementById("date");





const CHECK = "far fa-circle";
const UNCHECK = "fas fa-check-circle";
const LINE_THROUGH = "lineThrough";


function addToDo(toDo, id, done, trash) {
  if (trash) { return; }

const DONE = done ? CHECK : UNCHECK;

const LIST = done ? LINE_THROUGH : "";

const text = 
  `<li class="item">
    <i class="far ${DONE}" aria-hidden="true" job="complete" id="${id}"></i>
    <p class="text${LINE}"> ${toDo} </p>
    <i class="far fa-trash-alt" aria-hidden="true" job="delete" id="${id}"></i>
  </li>`

const position = "beforeend";

list.insertAdjacentHTML(position, text);
}


const input = documen.getElementById("input");

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      AddToDo(toDo, id, false, false);
      LIST.push(
        {
          name: toDo,
          id: id,
          done: false,
          trash: false
        }
      )
    }
    input.value = "";
    id++;
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false: true;
}


function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

const list = document.getElementById("list");

list.addEventListener("click", function(event){
  let element = event.target;  //  <i class="far fa-trash-alt" job="delete" id="0"></i>
  const elementJOB = event.target.attributes.job.value; // delete or complete
  if(elementJOB == "complete"){
    completeToDo(element);
  }
  else if(elementJOB == "delete"){
    removeToDo(        );
  }
});

localStorage.setItem('key', 'value');

let variable = localStorage.getItem("key");

localStorage.setItem("ToDo", JSON.stringify(LIST));