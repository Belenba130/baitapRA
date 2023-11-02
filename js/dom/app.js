
function addTask() {
    var work = document.getElementById('newTask');
    var task = work.value;
    work.value = "";
    if (task !== " ") {
       
        var listtask = document.getElementById('taskList');
        var newtask = document.createElement('li');
        newtask.innerHTML = '<span>' + task + '</span><i class="fa-solid fa-x" onclick="deleteTask(this)"></i>';
        newtask.addEventListener('click',function(){
            this.setAttribute('class','complete')
            var check = document.createElement('i');
            check.classList.add('fa-solid fa-check');
        })
    }
    listtask.appendChild(newtask);
}
function deleteTask(element) {
    var listItem = element.parentElement;
    listItem.remove();
}