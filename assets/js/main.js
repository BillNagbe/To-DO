let input, btn, taskList;

input = document.getElementById("input-text");

taskList = document.getElementById("task-list ");


function addTask() {
    if(input.value === " ")  alert("Put something in the box");
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = " ";
}


function saveDate() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    localStorage.innerHTML = localStorage.getItem("data");
}