import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from '@material-ui/core/TextField';

const AddTodo = ({ dispatch }) => {
  let input
  
  return (
    <div>
      <form className="addTodo" id='form-addTodo'
        onSubmit={e => {
          console.log('cool')
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



        <button className="mainButton"  type="submit" form="form-addTodo" label="Submit"    
           >Feed the Frog!</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)