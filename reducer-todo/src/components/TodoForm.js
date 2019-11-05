import React, { useState } from 'react';

//Adding todos to
export const  TodoForm = ({dispatch}) => {
    const [item, setItem] = useState("");
  
    const handleChanges = e => {
        setItem (e.target.value)
        }
    const submitFom = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("")
    }
        return(
            <form onSubmit= {submitFom}>
                <label htmlFor= "todo">New Todo</label>
                <input
                type = "text"
                name = "todo"
                id = "item"
                value = {item}
                onChange = {handleChanges}
                />
                <button>Add Todo!</button>
            </form>
        )
    }


export default TodoForm;