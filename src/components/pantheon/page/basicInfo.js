import React from 'react'
import {Row, Col} from 'react-bootstrap'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.item
    return <div>
    <img src={item.thumbnail}  alt={item.name} width="100px"/>
    <h1>{item.name}</h1>
    <Row>
        <Col>
            <h4>Overview</h4>
            <p>{item.overviewInfo}</p>
        </Col>
        <Col>
            <p>{item.description}</p>
            {this.props.children}
        </Col>
    </Row>

    <div>
        <h4>History & Background</h4>
        <p>{item.historyInfo}</p>
        <h4>Culture & Advancements</h4>
        <p>{item.cultureInfo}</p>
    </div>
    </div>
  }
}

export default BasicInfo
