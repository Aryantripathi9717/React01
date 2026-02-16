import { useState } from 'react';
// import './EventToDo.css'

// const EventToDo = () => {
//     function handleSubmit(e){
//         e.preventDefault();
//         const input = e.target.task.value;
//         const taskValue = input.trim();
//         // const input = e.target.querySelector('input[name="task"]');
//         // const taskValue = input.value.trim();
//         if(taskValue===""){
//             alert("Can not add Empty task");
//             return ;
//         }
//         const li = document.createElement("li");
//         li.innerHTML = `<span class="Eventli">${taskValue}</span> &nbsp;&nbsp;&nbsp;
//         <button class='deleteBtn'>Delete</button>`;

//         document.getElementById("taskList").appendChild(li);
//         input.value = ''; 
//     }

//      function handleListClick(e){
//         if(e.target.className==='deleteBtn'){
//             e.target.parentElement.remove();
//         }

//     }

//   return (
//     <div className="EventToDo">
//         <h1>To Do List</h1>
//        <form  onSubmit={handleSubmit}>
//         <input type="text" name='task' placeholder='Enter Task'/>
//         <br/><br />
//         <button style={{backgroundColor:"fountain"}} type="submit">Add Task</button>
//        </form>
//        <hr />
//         <ul className='EventUl' id='taskList' onClick={handleListClick}>
            
//         </ul>
//     </div>
//   )
// }

// export default EventToDo;


import './EventToDo.css'
function EventToDo() {
    

    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
  
    function handleSubmit(e){
        e.preventDefault();
        const input = e.target.todo.value;
        const taskValue = input.trim();
        if(taskValue===""){
            alert("Can not add empty task");
            return;
       
          }
          setTasks((prevTasks) => [...prevTasks,taskValue])
          setTask("");
      }

      function handleDelete(index){
        setTasks((prevTasks)=>
        prevTasks.filter((_,i)=>i!==index))
      }



  return (

    <div className='EventToDo'>
    <h1 className='h1tag'>To do App</h1>
      <form action="submit" onSubmit={(e)=>{handleSubmit(e)}}>
      <input className='inputTask' type="text" name="todo" placeholder='Enter your task'
      value={task}
      onChange={(e)=>setTask(e.target.value)}/>
      <br /><br />
      <button className='Addbtn'>Add Task</button>
      </form>
      <hr />
      <ul>
        {
          tasks.map((item,index)=>(
            <li className='eachTask' key={index}>
              <span>{item}</span>
              <button className='deletebtn' onClick={()=>handleDelete(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EventToDo