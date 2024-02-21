const taskInput = document.getElementById("task-input");
const taskContainer = document.getElementById("task-container");

function addTask(){
    if(taskInput.value === "") {
        alert("You must type a task")
    } 

    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskContainer.appendChild(li);
        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7"
        li.appendChild(deleteButton);
        saveData();

    }
    taskInput.value = "";

}

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        }
        saveData();
    }
    ,false)

    function saveData(){
        localStorage.setItem("data",taskContainer.innerHTML);
    }

    function showTask(){
        taskContainer.innerHTML = localStorage.getItem("data")
    }

    showTask();
