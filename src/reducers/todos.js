// import axios from 'axios'
const todos = (state = JSON.parse(localStorage.getItem('todos')) || [],  action) => {
  let result = [];
  switch (action.type) {
    case 'ADD_TODO':
       result =  [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      localStorage.setItem('currentId', JSON.stringify(action.id))
      localStorage.setItem('todos', JSON.stringify(result))
      return result
    case 'TOGGLE_TODO':
       result =  state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(result))

      return result;
    case 'DELETE_TODO':
      console.log('delete todo triggered, ', state)
      result = state.filter(todo => todo.id !== action.id)
      localStorage.setItem('todos', JSON.stringify(result))
      return result;
    case 'FETCH_IMAGE':
      console.log('fetch image for todo triggered, ', state)
      // axios.get(`http://aws.random.cat/meow`)
      //   .then(res => {
      //     console.log('IMAGE ', res)
      //     if(res && res['data']) {
      //       return res['data']['file']
      //     }
      //   })
      return null
    default:
      return state
  }
}

export default todos