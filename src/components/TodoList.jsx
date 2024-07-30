import React, { useState } from 'react'
import './TodoList.css';
const TodoList = () => {

    const [task,setTask] = useState(""); // For the new task input

    const [taskList, setTaskList] = useState([]); // List of all tasks

    const [editingIndex, setEditingIndex] = useState(null); // Index of the task being edited
    const [editTask, setEditTask] = useState(""); // Edited task text
    const [completedTasks, setCompletedTasks] = useState([]); // List of completed tasks' indices
    const [searchQuery, setSearchQuery] = useState(""); // Search query for filtering tasks


    
    // Function to add a new task to the task list
    const addTask = () => {
        if(task.trim() !== ""){
            const newTask = {
                text:task,
                time : new Date().toLocaleString()
            }
        setTaskList([...taskList, newTask])
        setTask("");
        }
    }


    // Function to start editing a task
    const startEditing = (index)=>{
        setEditingIndex(index);
        setEditTask(taskList[index].text)
    }

    // Function to update a task
    const updateTask = (index) =>{
        const updatedTask = [...taskList]
        updatedTask[index] = {
            ...updatedTask[index],
            text: editTask.trim(),
            time : new Date().toLocaleString() // Update time to current date and time
        }
        
        setTaskList(updatedTask);
        setEditingIndex(null);
        setEditTask("") 
    }


    // Function to delete a task
    const deleteTask = (index)=> {
        const updatedTaskList = taskList.filter((_,i)=> i!==index);
        setTaskList(updatedTaskList);
    }


    // Function to mark a task as done
    const markAsDone = (index)=>{
        if (!completedTasks.includes(index)){
            setCompletedTasks([...completedTasks, index]);


            const updatedTask = [...taskList]
        updatedTask[index] = {
            ...updatedTask[index],
            text: taskList[index].text,
            time : new Date().toLocaleString() // Update time to current date and time
        }
        
        setTaskList(updatedTask);
        

        }

    }


    // Function to filter tasks based on search query
    const filteredTasks = taskList.filter((task)=>{
        return task.text.toLowerCase().includes(searchQuery.toLowerCase())
    })

    


  return (
    <div className='container'>

        {/* Input section for adding new tasks */}
        <div className="input-section">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='type a task'/>
            <button value={task} onClick={addTask}>Add Task</button>
        </div>


        {/* Input section for searching tasks */}
        <div className='searchQuery'>
            <input type="text" value={searchQuery} placeholder='Search Tasks' onChange={(e)=>setSearchQuery(e.target.value)}/>
        </div>
        
        
        {/* List of tasks */}
        <div className="tasks-list">

            {filteredTasks.map((task,index)=>{

                const checkboxId = `collapsable-head-${index}`;


                return <div key={index} className={`task-item ${completedTasks.includes(index) ? 'completed' : ''}`}>

                    {editingIndex === index? (
                    <div className="editing">
                        <input type="text" value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
                        <button className='update-button' onClick={()=>updateTask(index)}>Update</button>
                    </div>
                ):

                (
                <div className='main-box' key={index}>
                    <div className='collapsable'>
                        <input type="checkbox" id={checkboxId}/>
                        <label for={checkboxId}><h1>{task.text}</h1></label>
                        <div className='collapsable-text'>
                            <h2>Last updated on</h2>
                            <h3>{task.time}</h3>
                        </div>
                    </div>
                    

                    {/* Buttons for editing, deleting, and marking tasks as done */}
                    <button className="edit-button" onClick={()=> startEditing(index)}>edit</button>
                    <button className="delete-button" onClick={()=> deleteTask(index)}>Delete</button>
                    <button className="markAsDone-button" onClick={()=> markAsDone(index)}>{completedTasks.includes(index)?"Done":"Mark as Done"}</button>

                </div>
                )}

                    
                </div>




            })}
        </div>
        
        
        
    </div>


    
  )
}

export default TodoList