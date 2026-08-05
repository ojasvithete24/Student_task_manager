function addTask(){

    let input=document.getElementById("taskInput");
    let task=input.value.trim();

    if(task===""){
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <span onclick="this.classList.toggle('completed')">${task}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value="";
}