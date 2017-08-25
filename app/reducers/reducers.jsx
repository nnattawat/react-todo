var uuid = require('node-uuid');
var moment = require('moment');

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
      break;
    default:
      return state;
  }
};

export let showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
      break;
    default:
      return state;
  }
};

export let todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      break;
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        let newCompleted;
        if (todo.id == action.id) {
          newCompleted = !todo.completed;
        }

        return {
          ...todo,
          completed: newCompleted,
          completedAt: newCompleted ? moment().unix() : undefined
        };
      });
      break;
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
      break;
    default:
      return state;
  }
};
