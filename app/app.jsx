let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let {Provider} = require('react-redux');

let configureStore = require('configureStore');

let TodoApp = require('TodoApp');
var actions = require('actions');
let TodoAPI = require('TodoAPI');

let initTodos = TodoAPI.getTodos();
console.log(initTodos);
let store = configureStore.configure({ todos: initTodos });

store.subscribe(() => {
  let state = store.getState();
  TodoAPI.setTodos(state.todos);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
