import React from 'react'
import Todo from './Todo'

const List = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)
export default  List;
