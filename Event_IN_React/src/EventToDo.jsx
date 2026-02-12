

const EventToDo = () => {
    function handleSubmit(e){
        e.preventDefault();
        // const inputi = e.target.value;
        // const taskValue = inputi.trim();
        const inputi = e.target.querySelector('input[name="task"]');
        const taskValue = inputi.value.trim();
        if(taskValue===""){
            alert("Can not add Empty task");
            return ;
        }
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskValue}</span>
        <button class='deleteBtn'>Delete</button>`;

        document.getElementById("taskList").appendChild(li);
        inputi.value = ''; 
    }

     function handleListClick(e){
        if(e.target.className==='deleteBtn'){
            e.target.parentElement.remove();
        }

    }

    
  return (
    <>
        <h1>To Do List</h1>
       <form  onSubmit={handleSubmit}>
        <input type="text" name='task' placeholder='Enter Task' />
        <br/><br />
        <button type="submit">Add Task</button>
       </form>
        <ul id='tasklist' onClick={handleListClick}>
            
        </ul>
    </>
  )
}

export default EventToDo;

// const EventToDo = ({name}) => {

//     function handleSubmit(e){
//         e.preventDefault();
//         const inputi = e.target.querySelector('input[name="task"]');
//         const taskValue = inputi.value.trim();
//         if(taskValue===""){
//             alert("Cannot add Empty task");
//             return ;
//         }
//         const li = document.createElement("li");
//         li.innerHTML = `<span>${taskValue}</span>
//         <button class='deleteBtn'>Delete</button>`;

//         document.getElementById("taskList").appendChild(li);
//         inputi.value = ''; // Clear input after add (bonus UX)
//     }

//     function handleListClick(e){
//         if(e.target.className==='deleteBtn'){
//             e.target.parentElement.remove();
//         }
//     }
    
//     return (
//     <>
//         <h1>To Do List</h1>
//       <form  onSubmit={handleSubmit}>
//         <input type="text" name='task' placeholder='Enter Task' />
//         <br/><br />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul id='taskList' onClick={handleListClick}>
        
//       </ul>
//     </>
//     )
// }

// export default EventToDo;