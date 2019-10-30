let counter = 0;
export const addTodo = content => ({
    type: 'ADD_TODO',
    id: counter++,
    content
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
     id
});

export const filter = typeOfFilter => ({
    type: 'FILTER',
    typeOfFilter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const filters = {
    ALL: 'ALL',
    FINISHED: 'FINISHED',
    IN_PROGRESS: 'IN_PROGRESS'
};
