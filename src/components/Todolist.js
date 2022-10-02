import React, { useState } from 'react';
import Todotable from './Todotable';

export default function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);
  
    const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    }
  
    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    }

    const deleteTodo = () => {
      setTodos(todos.filter((todo, i) => i !== todo.index));
    }

    return (
        <div className="App">
          <header className="App-header">
            <p>
              Simple Todolist
            </p>
          </header>
          <form onSubmit={addTodo}>
            <label>
              Description:
              <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
            </label>
            <label>
              Date:
              <input type="text" name="date" value={todo.date} onChange={inputChanged} />
            </label>
            <input type="submit" value="Add" />
          </form>
          <Todotable todos={todos} deleteTodo={deleteTodo}/>
        </div>
      );
};
