import React from 'react'
import { ListItem } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ onClick, completed, text, onDelete}) => (
  <ListItem className='row todo' style={{      display: 'flex',
  justifyContent: 'space-between'}}>
      <div

    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >         <ListItemText primary={text} secondary={completed ? "Done" : "In progress"} />
  
  </div>
  <Checkbox
        checked={completed}
        onChange={onClick}
        value="checkedB"
        color="primary"
 
      />
     <button onClick={onDelete}>X</button>
  </ListItem>
  
)


export default Todo

