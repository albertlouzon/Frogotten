import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Filters from './components/filters'
import AddTodo from './containers/AddTodo'
import ListUI from './containers/List-UI'

class App extends Component {
  render() {
      return (
          <div>
              <AddTodo />
              <ListUI />
              <Filters />
          </div>
      )
    // return (
    //
    //
    //
    //     <div className="App">
    //       <header className="App-header">
    //         <img
    //             src={logo}
    //             className={
    //               "App-logo" +
    //               (this.props.rotating ? "":" App-logo-paused")
    //             }
    //             alt="logo"
    //             onClick={() => this.props.rotateAction(!this.props.rotating)}
    //         />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //             className="App-link"
    //             href="https://reactjs.org"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    // );
  }
}

// const mapStateToProps = state => ({
//   ...state
// });
// const mapDispatchToProps = dispatch => ({
//   rotateAction: (payload) => dispatch(todoActions(payload))
// });

export default connect(App);
