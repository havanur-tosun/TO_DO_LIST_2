const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "far fa-check-circle";
const UNCHECK = "far fa-circle";
const LINE_THROUGH = "lineThrough";

let LIST = [], 
id = 0;

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash) {
  if(trash){ return; }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `<li class="item">
                  <i class="far ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="far fa-trash-alt de" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  
  list.insertAdjacentHTML(position, item);
}

// addToDo("Drink Coffee");

document.addEventListener("keyup", function (event){
  if (event.keyCode == 13) {
    const toDo = input.value;
    if(toDo){
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      id++;
    }
    input.value = "";
  }
});

// addToDo("Coffee", 1, false, false);


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

list.addEventListener("click", function(event){
  let element = event.target;  //return the clicked element inside list
  const elementJob = event.target.attributes.job.value; // delete or complete
  if(elementJob == "complete"){
    completeToDo(element);
  }
  else if(elementJob == "delete"){
    removeToDo(element);
  }
});

clear.addEventListener("click", function(){
  location.reload();
});