import React from 'react'

const Todo = ({ onClick, completed, text, onDelete}) => (
  <div className='row'>
      <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </div>
     <button onClick={onDelete}>X</button>
  </div>
  
)


export default Todo