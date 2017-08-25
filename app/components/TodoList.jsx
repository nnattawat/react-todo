let React = require('react');
import Todo from 'Todo';
let {connect} = require('react-redux');
let TodoAPI = require('TodoAPI');

export let TodoList = React.createClass({
  render: function () {
    let {todos, showCompleted, searchText} = this.props;

    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    let renderTodos = () => {
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});


// connect to the store and attach todos to props
export default connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoList);
