const btn = document.getElementById("add");

let input = document.getElementById("input-text");

let taskList = document.getElementById("task-list ");


function addTask() {
    if(input.value === " ")  alert("Put something in the box");
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        saveDate();
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveDate();
    }

    input.value = " ";
    saveDate();
}

taskList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);


function saveDate() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();


btn.addEventListener("click", addTask())