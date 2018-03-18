import React from 'react'
import Banner from './Banner'
import TaskManager from './TaskManager'

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <TaskManager/>
      </div>
    );
  }
}

export default App
