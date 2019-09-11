import React from 'react'
import {Row, Col} from 'react-bootstrap'

class LogsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }

  toggleDetails = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  clearEntry = (e) => {
    this.props.clearEntry(this.props.entry)
  }

  render() {
    const entry = this.props.entry
    return <div>
      USER {entry.user} - DID {entry.action}<br />
      <span onClick={this.clearEntry}>Clear</span>
      <span onClick={this.toggleDetails}>{this.state.showDetails ? "Hide Details" : "Show Details"}</span>
      { this.state.showDetails ? <Row>
          <Col>Before<br /> {JSON.stringify(entry.before).split(',').map(i => <div>{i}</div>) }</Col>
          <Col>After<br /> {JSON.stringify(entry.after).split(',').map(i => <div>{i}</div>) }</Col>
      </Row> : "" }
    </div>
  }
}

export default LogsIndex
