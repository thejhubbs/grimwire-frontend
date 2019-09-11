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
      <Row>
          <Col>
              <img src={item.thumbnail ? `http://localhost:4001/uploads/${item.thumbnail.image_url}` : ""}  alt={item.pantheon_name} width="100px"/>
              <h1>{item.pantheon_name}</h1>
              <p>{item.pantheon_description}</p>
              {this.props.children}
          </Col>
          <Col>
              <h4>Overview</h4>
              <p>{item.pantheon_overview}</p>
          </Col>
      </Row>

      <div>
          <h4>History & Background</h4>
          <p>{item.pantheon_history}</p>
          <h4>Culture & Advancements</h4>
          <p>{item.pantheon_culture}</p>
      </div>
    </div>
  }
}

export default BasicInfo
