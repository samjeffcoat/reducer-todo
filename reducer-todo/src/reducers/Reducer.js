export const todo = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}


export function reducer(state, action){
    switch(action.type) {
        case 'TESTING_SETUP ':
    return {
        ...state, 
    }
    default:
        return state 
}}