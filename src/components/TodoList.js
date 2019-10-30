import React from 'react'
import Todo from './Todo'

const List = ({ todos, toggleTodo, deleteTodo }) => (
    <div>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => {deleteTodo(todo.id)}}/>
        ))}
    </div>
)
export default  List;
