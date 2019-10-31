import React from 'react'
import Todo from './Todo'
import List from '@material-ui/core/List';
import axios from 'axios'

const TodoList = ({ todos, toggleTodo, deleteTodo, fetchImage }) => (
    <List style={{width: '100%'}}>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => {deleteTodo(todo.id)}} image={() => {
          return 'https://purr.objects-us-east-1.dream.io/i/17202788_1446865758698091_5564738866603964311_n.jpg'
            }} />
        ))}
    </List>
)
export default  TodoList;
