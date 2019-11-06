import React from 'react';


export function Todo({todo, dispatch}){
    return (
        <div>
            <p>{todo.item}</p>
        </div>
    )
}

export default Todo;

// className = {`todo${todo.completed ? ' completed' : ' '}`} onClick = {() => toggleCompleted(todo.id)}