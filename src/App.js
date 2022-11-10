import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import InputForm from './components/InputForm';


function App() {
  //creates a state variable ("todos") and a function to set the state ("setState").
  //uses "useState" React Hook to define a state property named "text", along with its default value (for this example, its 3 separate todo line items) 
  const [todos, setTodos] = useState([ 
    { 
      someText: "Learn a front end framework",
      isCompleted: false
      },
    { someText: "Learn a back end framework",
      isCompleted: false
      },
    {
      someText: " Deploy your project!",
      isCompleted: false
      },
  ]);

  //Function to set a new Todo line item
  const newTodo = someText => {
    const someNewTodos = [...todos, { someText }]; //spread operator "..." copies the list of "todos" and adds the "someNewTodos" prop of "newText" to the list of "todos"
    setTodos(someNewTodos); //Uses the React Hook defined above to set the value of "someNewTodos" to the pre-existing list of "todos"
  };

  //Function to set the "isCompleted" boolean to true for a todo line item
  const completeTodo = index => {
    const someCompletedTodos = [...todos];
    someCompletedTodos[index].isCompleted = true;
    setTodos(someCompletedTodos);
  };

  // Function to remove a line item from the list(or array) of Todos
  const removeTodo = index => {
    const someRemovedTodos = [...todos];
    someRemovedTodos.splice(index, 1);
    setTodos(someRemovedTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => ( //map() is used to create an array of items, use it render an array (such as "todos" variable). 
                                      //In other words, it creates an array of "Todo" functional components
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <InputForm addTodo={newTodo}/>
      </div>
    </div>
  );
}

export default App;
