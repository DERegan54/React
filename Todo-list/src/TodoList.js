import React, {useState} from "react";
import TodoId from "./TodoId";
import TodoForm from "./TodoForm"
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const id = <TodoId />;


    const add = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
        console.log(newTodo);
    };

    const deleteTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const renderTask = todos.map(todo => (
       <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            deleteTodo={deleteTodo}
        />
    )); 
    
    return (
        <div className="TodoList">
            <h1 className="Todo-heading">To-Do List</h1>
            <TodoForm addTodo={add} />
            <ul>{renderTask}</ul>
        </div>
    );
};

export default TodoList;