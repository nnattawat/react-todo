import React from 'react';
import actions from 'actions';
import {connect} from 'react-redux';

export let TodoSearch = React.createClass({
  render: function () {
    let {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" value={searchText} ref="searchText" placeholder="Search todos" onChange={() => {
            let searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={ () => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
