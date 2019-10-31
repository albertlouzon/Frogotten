import React from 'react'
import Todo from './Todo'
import List from '@material-ui/core/List';
// import axios from 'axios'

const TodoList = ({ todos, toggleTodo, deleteTodo, fetchImage }) => (
    <List style={{width: '100%'}}>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => {deleteTodo(todo.id)}} image={() => {
         return 'https://images-na.ssl-images-amazon.com/images/I/51gZMqROQGL._UX522_.jpg'
            }} />
        ))}
    </List>
)
export default  TodoList;
