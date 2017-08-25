let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'text'
      }

      let res = reducers.searchTextReducer('', action);
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted flag', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      // df(a), if a get changed test will false
      let res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk a dog'
      }

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let todos = [{
        id: 1,
        text: '...',
        completed: false,
        completedAt: undefined
      }];

      let action = {
        type: 'TOGGLE_TODO',
        id: 1
      }

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });
  });
});
