import React from 'react'
import Filters from './filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css'
const App = () => (

  <React.Fragment>
  <CssBaseline />
  <Container maxWidth="sm">
    <Typography component="div" style={{  backgroundColor: '#9575cd',
  height: "100vh",
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  justifyContent: 'space-around' }} >
    <AddTodo />
    <VisibleTodoList />
    <Filters />
      </Typography>

  </Container>
</React.Fragment>
)

export default App