import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducer';
import Todo from './Todo';

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className ='todo-list' >
            {props.todo.map(todo => (
                <Todo key = {todo.id} todo= {todo} toggleCompleted = {props.toggleCompleted} />
            ))}
            <button className = "clear-btn" onClick= {props.clearCompleted}>Clear Todo's </button>

        </div>
    )
}

export default TodoList;