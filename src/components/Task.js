import React from 'react'

class Task extends React.Component {
  tellParentOnClick = () => {
    this.props.clickHandler(this.props.idx)
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
            <i
              className="card-img-left fa fa-square-o"
              onClick={this.tellParentOnClick}>&nbsp;</i>
            {this.props.value}
        </div>
      </div>
    )
  }
}

export default Task
