import React from 'react'
import Task from './Task'

class ListedTask extends React.Component {
  render() {
    return (
      <li>
        <Task
          idx={this.props.idx}
          value={this.props.value}
          clickHandler={this.props.clickHandler}/>
      </li>
    );
  }
}

export default ListedTask
