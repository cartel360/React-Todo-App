import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do some Project',
        completed: false
      },
      {
        id: 2,
        title: 'Clean My Laptop',
        completed: true
      },
      {
        id: 3,
        title: 'Submit An assignment',
        completed: false
      }
    ]
  }


  render() {
    return (
      <div className="App" >
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}


export default App;