let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export class AddTodo extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
