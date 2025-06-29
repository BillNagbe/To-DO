const container = document.getElementsByClassName("task-info");
const add = document.getElementsByClassName("add");
const remove = document.getElementsByClassName("minus");
const input = document.getElementById("text-field");


add.addEventListener("click", ()=> {
    preventDefault();
    const li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
})


remove.addEventListener("click", () => {
    
})