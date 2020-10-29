import React, {useState} from "react";


const CreateTaskInput =({onCreate})=> {
  const [state, setState]= useState('')
 console.log(state);

  const handleChange = ({target}) => {
    setState(target.value);
  };

  const handleTaskCreate = () => {
    if(state === "") return
    onCreate(state);
    setState("")
  };
 
  
    return (
     
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={state}
          onChange={handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }


export default CreateTaskInput;
