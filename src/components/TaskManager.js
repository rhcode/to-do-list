import React from 'react'
import ListedTask from './ListedTask'
import NewTask from './NewTask'
import base from '../base'

class TaskManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listedTasks: []
    }
  }

  componentDidMount() {
    this.ref = base.syncState("task-manager", {
      context: this,
      state: "listedTasks",
      asArray: true
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  handleCheckboxClick = (index) => {
    const currentTasks = [ ...this.state.listedTasks ]
    currentTasks.splice(index, 1)
    this.setState({listedTasks: currentTasks})
  }

  getAllListedTasks = () => {
    const tasks = [ ...this.state.listedTasks ]
    const listTasks = tasks.map((task, index) =>
      <ListedTask
        key={index}
        idx={index}
        value={task}
        clickHandler={this.handleCheckboxClick}/>
    )
    return listTasks
  }

  handleInputChange = (event) => {
    this.setState({newTask: event.target.value})
  }

  handleAddTask = () => {
    const taskToBeAdded = this.state.newTask
    if (typeof taskToBeAdded !== 'undefined') {
      const taskListToBeUpdated = [ ...this.state.listedTasks ]
      taskListToBeUpdated.push(taskToBeAdded)
      this.setState({listedTasks: taskListToBeUpdated})
      this.inputTaskElement.value = ""
      this.inputTaskElement.focus()
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 main-area">
            <ul className="list-unstyled tasks">
              {this.getAllListedTasks()}
              <NewTask onInputChange={this.handleInputChange}
                onInputSubmit={this.handleAddTask}
                inputRef={el => this.inputTaskElement = el}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskManager
