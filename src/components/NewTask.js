import React from 'react'

class NewTask extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text"
          className="form-control"
          placeholder="enter new task"
          aria-label="newTask"
          aria-describedby="basic-addon1"
          ref={this.props.inputRef}
          onChange={this.props.onInputChange}></input>

        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
            type="button"
            onClick={this.props.onInputSubmit}>add task</button>
        </div>
      </div>
    );
  }
}

export default NewTask
