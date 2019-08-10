import React from 'react'

import LogEntry from './entry'

class LogsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return <div>
      {this.props.logs.map(item => <LogEntry entry={item} clearEntry={this.props.clearEntry} />)}
    </div>
  }
}

export default LogsList
