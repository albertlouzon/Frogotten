import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from '@material-ui/core/TextField';
import FlatButton  from '@material-ui/core/Button';

const AddTodo = ({ dispatch }) => {
  let input
  
  return (
    <div>
      <form id="my-form-id"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >

<TextField
          id="standard-basic"
          style={{  
           width: 200,}}
           inputRef={node => (input = node)}

          label="Type a todo"
          margin="normal"
        />



        <button className="mainButton"  type="submit" form="my-form-id" label="Submit"       //set the buttom type is submit
           type="submit">Feed the Frog!</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)