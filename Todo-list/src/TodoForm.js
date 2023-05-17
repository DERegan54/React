import React, {useState} from "react";
import TodoId from "./TodoId";

const TodoForm = ({addTodo}) => {
    const id = <TodoId />;
    const [task, setTask] = useState("");

    const handleChange = (evt) => {
        setTask(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo({task, id:id });
        setTask("");
    };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                />
                <button> Add Task</button>
            </form>
        </div> 
    );   
};

export default TodoForm;