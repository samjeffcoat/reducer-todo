import React, { useReducer } from 'react';
import { reducer, todo } from '../reducers/Reducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, todo);

    return(
        <div className ='todo-list' >
            <TodoForm dispatch ={dispatch}/>
            {state.map(todo => (
                <Todo key = {todo.id} todo= {todo} dispatch = {dispatch} />
            ))}

        </div>
    )
}

export default TodoList;