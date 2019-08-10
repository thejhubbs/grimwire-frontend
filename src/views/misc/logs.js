import React from 'react'

import LogList from '../../components/logs/list'

class LogsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      logs: []
    }
  }

  componentDidMount = () => {
    const localLogs = JSON.parse(localStorage.getItem('log'))
    console.log(localLogs)
    this.setState({logs: localLogs ? localLogs : [] })
  }

  clearEntry = (entry) => {
    const index = this.state.logs.indexOf(entry)
    const array = this.state.logs
    array.splice(index, 1)
    this.setState({logs: array})
    localStorage.setItem('log', JSON.stringify(array))
  }

  clearAll = () => {
    this.setState({logs: []})
    localStorage.setItem('log', JSON.stringify([]))
  }

  render() {
    return <div>
      <span onClick={this.clearAll}>Clear All</span>
      <LogList logs={this.state.logs} clearEntry={this.clearEntry} />
    </div>
  }
}

export default LogsIndex
