let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let {Provider} = require('react-redux');

let store = require('configureStore').configure();

let TodoApp = require('TodoApp');
var actions = require('actions');

store.dispatch(actions.addTodo('Walk a dog'));
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
