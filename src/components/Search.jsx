import React, { useState } from 'react';
import './TodoList.css';

const Search = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTask(taskList[index]);
  };

  const updateTask = (index) => {
    const updatedTask = [...taskList];
    updatedTask[index] = editTask.trim();
    setTaskList(updatedTask);
    setEditingIndex(null);
    setEditTask("");
  };

  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const markAsDone = (index) => {
    if (!completedTasks.includes(index)) {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  const filteredTasks = taskList.filter((task) =>
    task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="search-section">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
        />
      </div>

      <div className="tasks-list">
        {filteredTasks.map((task, index) => {
          const checkboxId = `collapsable-head-${index}`;
          return (
            <div key={index} className={`task-item ${completedTasks.includes(index) ? 'completed' : ''}`}>
              {editingIndex === index ? (
                <div className="editing">
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button className='update-button' onClick={() => updateTask(index)}>Update</button>
                </div>
              ) : (
                <div className='main-box' key={index}>
                  <div className='collapsable'>
                    <input type="checkbox" id={checkboxId} />
                    <label htmlFor={checkboxId}><h1>{task}</h1></label>
                    <div className='collapsable-text'>
                      <h2>description</h2>
                      <p>Task Details</p>
                    </div>
                  </div>
                  <button className="edit-button" onClick={() => startEditing(index)}>Edit</button>
                  <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                  <button className="markAsDone-button" onClick={() => markAsDone(index)}>
                    {completedTasks.includes(index) ? "Done" : "Mark as Done"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
