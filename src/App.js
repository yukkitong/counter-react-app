
import React, { Component } from 'react';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import './App.css';
import { Button } from 'react-bootstrap';
import { counterReducer } from './reducer/reducer';
import { increase, decrease } from './action/counterAction';
import valueOberser from './valueObserver';

// store
const store = createStore(counterReducer, applyMiddleware(logger, valueOberser));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); // initial state

    const UNIT = 5;
    this.handler = bindActionCreators(
      {
        increase: increase(UNIT),
        decrease: decrease(UNIT)
      },
      store.dispatch);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ color: this.state.red ? 'red' : 'black' }}>{this.state.count}</h1>
        <Button bsStyle="primary" onClick={this.handler.increase}>INCREASE</Button>
        <Button bsStyle="default" onClick={this.handler.decrease}>DECREASE</Button>
      </div>
    );
  }
}

export default App;
