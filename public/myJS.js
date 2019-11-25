const GlobalRenderWhenAuthenticated = ()=>{
  //$("#todo_list_component").hide();
}
GlobalRenderWhenAuthenticated();


// Effacer une tâche d'une to-do list
function deleteTask() {
  let btns_todo_list_delete = document.getElementsByClassName("todo_list_delete");
  for (let i = 0; i < btns_todo_list_delete.length; i++) {
    btns_todo_list_delete[i].onclick = function () {
      let li = this.parentElement;
      li.style.display = "none";
    }
  }
};

// Indiquer une tâche de la todo list comme terminée
function endTask() {
  let btns_todo_list_check = document.getElementsByClassName("todo_list_check");
  for (let i = 0; i < btns_todo_list_check.length; i++) {
    btns_todo_list_check[i].onclick = function () {
      console.log(btns_todo_list_check[i]);
      let li = this.parentElement;
      if (li.className === "todo_list_li checked") {
        li.className = "todo_list_li";
      }
      else {
        li.className = "todo_list_li checked";
      }
    };
  }
}

// Ajouter une tâche à une to-do list
let btns_add_todo_list = document.getElementsByClassName("todo_list_add");
let ul_todo_list = document.getElementsByClassName("todo_list_ul");
let add_form_todo_list = document.getElementsByClassName("todo_list_add_form");
for (let i = 0; i < add_form_todo_list.length; i++) {
  //add_form_todo_list[i].submit(function (e) {
  $(".todo_list_add_form").submit(function (e) {
    e.preventDefault();
    let input = $(".todo_list_input")[i];
    if (input.checkValidity()) {
      let val = input.value;
      let spanCheck = document.createElement("span");
      spanCheck.className = "todo_list_check";
      spanCheck.innerText = "\u0474";
      let spanDelete = document.createElement("span");
      spanDelete.className = "todo_list_delete";
      spanDelete.innerText = "\u00D7";
      let spanText = document.createElement("span");
      spanText.contentEditable = true;
      spanText.innerText = val;
      let li = document.createElement("li");
      li.className = "todo_list_li";
      ul_todo_list[i].appendChild(li);
      li.appendChild(spanCheck);
      li.appendChild(spanDelete);
      li.appendChild(spanText);
      deleteTask();
      endTask();
    }
  });
};



/*
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}*/