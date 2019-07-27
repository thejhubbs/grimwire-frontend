import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.item
    const createdBy = this.props.createdBy
    const usedBy = this.props.usedBy
    console.log(createdBy)
    return <div>
    <img src={item.thumbnail} alt={item.name}  height="100px" />
    <h1>{item.name}</h1>
    <Row>
        <Col lg={4}>
            <p>{item.description}</p>
            <p>Created By: <Link to={`/pantheon/${createdBy.id}`}>{createdBy.name}</Link></p>
            <p>Used By:
    {usedBy.map(i =>
                <Link key={i.id} to={`/pantheon/${i.id}`}>{i.name}</Link>
            )}</p>
        </Col>
        <Col lg={8}>
            <h4>Theory & Application</h4>
            <p>{item.theoryText}</p>
            <h4>History & Background</h4>
            <p>{item.historyText}</p>
        </Col>
    </Row>
    </div>
  }
}

export default BasicInfo
