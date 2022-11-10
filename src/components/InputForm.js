import React, { useState } from 'react';

function InputForm({ addTodo }){
    const [value, setValue] = useState(""); //creates a state object named "value", defaults it to an empty string
  
    const handleSubmit = e => {
      e.preventDefault(); //disables the default action of submitting a form
      if (!value) return; //If theres no value, return (do nothing)
      addTodo(value); //takes the value from the "addTodo" prop, sets that value to the "value" state
      setValue(""); //resets the "value" state to an empty string
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='col-4'>
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button type="button" className="mx-2 btn btn-success" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
    );
  };

  export default InputForm;