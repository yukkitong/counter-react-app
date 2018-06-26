---
theme : "night"
transition: "fade-out"
highlightTheme: "zenburn"
---

# REACT & REDUX
__YUKKITONG__ <!-- .slide: data-background-color="#661111" -->

---

## REQUIREMENT #1
1. 두개의 버튼이 있다. <!-- .element: class="fragment highlight-current-red" -->
2. 하나의 버튼을 누르면 현재의 값에 1증가된 값이 화면에 표시 <!-- .element: class="fragment highlight-current-red" -->
3. 또 다른 버튼을 누르면 현재의 값에 1감소된 값이 화면에 표시 <!-- .element: class="fragment highlight-current-red" -->

--

## REQUIREMENT #1
```js
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState((state) => { count: state + 1 });
  }

  decrease = () => {
    this.setState((state) => { count: state - 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <h3>{this.state.count}</h3>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block onClick={this.increase}>
            Click me to Increase
          </Button>
          <Button bsStyle="default" bsSize="large" block onClick={this.decrease}>
            Click me to Decrease
          </Button>
        </div>
      </div>
    );
  }
}
```

---

## REQUIREMENT #2
1. State management using Redux <!-- .element: class="fragment highlight-current-red" -->
   - Separate Concerns
2. Create Action Creator <!-- .element: class="fragment highlight-current-red" -->

--

## REQUIREMENT #2
```js
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Button } from 'react-bootstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const initialState = { count: 0 };
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const increase = () => { type: 'INCREASE' };
const decrease = () => { type: 'DECREASE' };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getStore();
  }

  increase = () => {
    store.dispatch(increase());
  }

  decrease = () => {
    store.dispatch(decrease());
  }

  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <h3>{this.state.count}</h3>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block onClick={this.increase}>
            Click me to Increase
          </Button>
          <Button bsStyle="default" bsSize="large" block onClick={this.decrease}>
            Click me to Decrease
          </Button>
        </div>
      </div>
    );
  }
}
```

---

## REQUIREMENT #3
1. Code Splitting <!-- .element: class="fragment highlight-current-red" -->
   - Modules
2. Root State <!-- .element: class="fragment highlight-current-red" -->
   - State Tree
3. Use `bindActionCreators` <!-- .element: class="fragment highlight-current-red" -->
   - Bind Action to Dispatch
4. react-redux <!-- .element: class="fragment highlight-current-red" -->
   - `mapStateToProps`
   - `mapDispatchToProps`
   - `connect`

---

## REQUIREMENT #4
1. 증감값의 단위를 5로 변경 <!-- .element: class="fragment highlight-current-red" -->
   - Currry
2. 증가된 값이 30이상이면 표시되는 텍스트 색상을 붉은색으로 표시 <!-- .element: class="fragment highlight-current-red" -->
   - Redux Middleware 
   - `applyMiddleware`
3. 색상에 대한 state <!-- .element: class="fragment highlight-current-red" -->
   - `combineReducers`

---

## React Context API
https://reactjs.org/docs/context.html

---

## CONCLUSION
### END
