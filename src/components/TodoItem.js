//Functional component; returns HTML containing the "someText" property of the "todo" prop and 2 buttons (props in React are like arguments in Python)
function TodoItem({ todo, index, completeTodo, removeTodo }){
    return(
      <div className="row p-2">
        <div className="col">
          {/* //if todo.isCompleted is true, add a line-through styling. if not, no styling */}
          <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
            {todo.someText}
            <button type="button" className="mx-2 btn btn-primary" onClick={() => completeTodo(index)}>Complete</button>
            <button type="button" className="mx-2 btn btn-danger" onClick={() => removeTodo(index)}>X</button> 
          </div>
        </div>
      </div>
      
    );
  };

  export default TodoItem;