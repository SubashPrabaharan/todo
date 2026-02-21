const addBtn =  document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedTask = document.getElementById('completedTask');
const compTask = document.getElementById('completedTaskSelect');

addBtn.addEventListener('click',function(){

    const taskContainer  = document.createElement('div');
    const task = document.createElement('textarea');
    task.style.backgroundColor = color();
   const complete =  document.createElement('button'); 
    complete.textContent = "Complete";    

     complete.addEventListener('click',function(){

        const opt = document.createElement(`option`);
        opt.textContent = task.value;
        opt.value = task.value;

        compTask.appendChild(opt);
        taskContainer.remove();
      //  task.appendChild(opt);
     })

    
    
    taskContainer.appendChild(task);
    taskContainer.appendChild(complete);
    // taskList.appendChild(task);
    taskList.prepend(taskContainer);

   
})
// task.addEventListener('click',function(){
//     const complete =  document.createElement('button');
//     complete.textContent = "Complete";
//     task.appendChild(complete);
// })

// task = document.createElement('textarea');
// task.addEventListener('click',function(){
//  const complete =  document.createElement('button');
//  complete.textContent = "Complete";
//  task.appendChild(taskList);

const hex =  [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`];

function color(){
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*hex.length)];
    }
    return color;
}