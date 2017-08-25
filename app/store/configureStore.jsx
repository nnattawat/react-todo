let redux = require('redux');
let {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initState = {}) => {
  let reducer = redux.combineReducers({
    showText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, initState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
