import React, {useState, useEffect} from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

const baseUrl = 'https://5f7c2bda00bd74001690a560.mockapi.io/tasksNew/'

const TaskList =()=> {
  const [state, setState] = useState([]);
  useEffect(() => {
    fechTaskList();

  }, []);


const createTaskList=(task)=>{
  return fetch(baseUrl,{
  method: 'POST',
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(task)
})
  }

  const deleteTask=(id)=>{
    return fetch(`${baseUrl}/${id}`,{
      method:'DELETE'
    })
  }

  const fechTaskList=()=>{
    return fetch(baseUrl)
    .then(response=>response.json())
    .then(data=>setState(data))
  }

  const onCreate = (text) => {
    console.log(text);
    const newTask = {
      text,
      done: false,
    };

  createTaskList(newTask).then(()=>fechTaskList())
  };

  const updateTask=(id,updateData)=>{
    return fetch(`${baseUrl}/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(updateData)
    })
  }
  

  const handleStatusChange = (id) => {
   const{done,text} = state.find(task=>task.id===id);
   const updatedTask = {
    text,
    done: !done
   }

   updateTask(id, updatedTask).then(()=>fechTaskList())
  };

  const handleTaskDelete = (id) => {
    deleteTask(id).then(()=>fechTaskList())
  };

  
    const sortedList = state
      .concat()
      .sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              {...task}
              key={task.id}
              onChange={handleStatusChange}
              onDelete={handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }

export default TaskList;
