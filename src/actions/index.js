let counter =  localStorage.getItem('currentId') || 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: counter++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})
export const fetchImage = () => ({
  type: 'FETCH_IMAGE',
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}