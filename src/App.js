import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = (e) => {
    this.setState({draft: e.target.value})
  }

  addToDo = () => {
    const { tasks, draft } = this.state
    const list = this.state.tasks
    list.push(this.state.draft)
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state
    return (
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <div><p>{task}</p></div>)}
        <input type='text' onChange={this.updateDraft} value={draft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

class App extends Component {
  myTasks = [
    'Record a React.js video',
    'Go for a walk'
  ]
  render() {
    return(
      <div>
        <ToDoList title='gtata List' tasks={this.myTasks} />
      </div>
    )
  }
}

export default App;
