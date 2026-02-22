const addBtn =  document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedTask = document.getElementById('completedTask');
const completedTaskList = document.getElementById('completedTaskList');


addBtn.addEventListener('click',function(){

    const taskContainer = document.createElement('div');
    const task = document.createElement('textarea');
    task.style.backgroundColor = color();
    task.style.outline = "none";
   const complete =  document.createElement('button');
   const close = document.createElement('button');
   close.textContent = "Close";
   close.style.backgroundColor = "red";
   close.style.color = "white"; 

    //complete.style.display = "none"; 
    complete.textContent = "Complete";    
    complete.style.backgroundColor = "green";
    complete.style.color = "white";

    task.addEventListener('click',function(e){
         e.stopPropagation();
         close.style.display = "block";
         close.style.marginTop = "20px";
        complete.style.display = "block";
        complete.style.marginTop = "20px";        
    });

    document.addEventListener('click',function(){
        complete.style.display = "none";
        close.style.display = "none";
    })

     complete.addEventListener('click',function(){
        if(task.value === "") {
            alert("Enter the task first");
            return;
        }
      
        completedTaskList.prepend(taskContainer);
        task.disabled = true;
        complete.remove();

        // const opt = document.createElement(`option`);
        // opt.textContent = task.value;A
        // opt.value = task.value;
        // console.log(opt);
        // compTask.appendChild(opt);
        // taskContainer.remove();
      //  task.appendChild(opt);
     })
     //close a task
     close.addEventListener('click',function(){
        taskContainer.remove();
     })

    
    
    taskContainer.appendChild(task);
    taskContainer.appendChild(complete);
    taskContainer.appendChild(close);
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