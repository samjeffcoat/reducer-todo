import React, { useReducer } from 'react';
import { reducer, todo } from '../reducers/Reducer';
import Todo from './Todo';

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, todo);

    return(
        <div className ='todo-list' >
            {state.map(todo => (
                <Todo key = {todo.id} todo= {todo} toggleCompleted = {props.toggleCompleted}dispatch = {dispatch} />
            ))}
            <button className = "clear-btn" onClick= {props.clearCompleted}>Clear Todo's </button>

        </div>
    )
}

export default TodoList;