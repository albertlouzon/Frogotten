import React from 'react'
import Todo from './Todo'
import List from '@material-ui/core/List';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <List style={{width: '100%'}}>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => {deleteTodo(todo.id)}}/>
        ))}
    </List>
)
export default  TodoList;
