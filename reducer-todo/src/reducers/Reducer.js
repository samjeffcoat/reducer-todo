export const todo = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},  
    {
        item: 'Dont learn  about reducers',
        completed: false,
        id: 38933337589
},
{
    item: 'learn redux instead',
    completed: false,
    id: 125555511000
}

]


export const reducer =(state, action) =>{
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    id:Date.now(),
                    completed: false
                }
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })

        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
    default:
        return state;
}}