let input, addBtn, li, ul;

input = document.getElementById("input-text");

addBtn = document.getElementById("add");

ul = document.getElementById("task-list");

function addTask() {
    li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
}


addTask();