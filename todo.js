const addBtn =  document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click',function(){
    const task = document.createElement('textarea');
    task.style.backgroundColor = color();

    taskList.appendChild(task);
})

const hex =  [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`];

function color(){
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*hex.length)];
    }
    return color;
}