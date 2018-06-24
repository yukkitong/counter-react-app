
import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import { Button } from 'react-bootstrap';

// reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// store
const store = createStore(counterReducer);

const increase = () => ({ type: 'INCREASE' });
const decrease = () => ({ type: 'DECREASE' });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); // initial state
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  // event handler for increament
  increase = () => {
    store.dispatch(increase());
  }

  // event handler for decreament
  decrease = () => {
    store.dispatch({ type: 'DECREASE' });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <Button bsStyle="primary" onClick={this.increase}>INCREASE</Button>
        <Button bsStyle="default" onClick={this.decrease}>DECREASE</Button>
      </div>
    );
  }
}

export default App;
