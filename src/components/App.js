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
    <Container maxWidth="sm" style={{  color: '#01579b'}}>
      <Typography component="div" style={{
        backgroundColor: '#9575cd',
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        justifyContent: 'space-around'
      }} >
        <div className='row'>
          <h1 className="title col s12 l5"> <span className="frogLetters">FROG
                        </span>OTTEN: <span className="frogLetters">Never froget it...</span>
          </h1>
          <div className={'frogIcon col s12 offset-l2 l2 '} ></div>
          <AddTodo />
        </div>
        <VisibleTodoList />
        <Filters />
      </Typography>

    </Container>
  </React.Fragment>
)

export default App