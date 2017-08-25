let redux = require('redux');
let {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

let configure = () => {
  let reducer = redux.combineReducers({
    showText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

module.exports = configure();
