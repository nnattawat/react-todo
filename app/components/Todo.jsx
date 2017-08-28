let React = require('react');
let moment = require('moment');
let {connect} = require('react-redux');
let actions = require('actions');


export class Todo extends React.Component{
  constructor(props) {
    super(props);
  }

  renderDeleteButton() {
    let {id, completed, dispatch} = this.props;
    if (completed) {
      return (
        <div className="columns small-4">
          <button className="del-todo-btn button alert hollow" onClick={() => {
            dispatch(actions.removeTodo(id))
          }}>
            Delete
          </button>
        </div>
      )
    }
  }

  render() {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo-completed' : '';
    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className="row todo-container">
        <div className={`columns small-8 todo ${todoClassName}`} onClick={() => {
          dispatch(actions.toggleTodo(id))
        }}>
          <div>
            <input type="checkbox" checked={completed}/>
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
        </div>
        {this.renderDeleteButton()}
      </div>
    )
  }
};

// connect inject dispatch in props
export default connect()(Todo);
