import React, { useState, useEffect } from "react";
import { removeTodo } from "../features/Todo/todoSlice";
function Todos() {
  const todos=  useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return(<>
        <div>Todo List</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text} 
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
        ))}
</>
    )
}
export default Todos;