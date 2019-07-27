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
    return <div>
    <h3>List of Items</h3>

    <Row>
        {item.specificOrder ? <Col>#</Col> : ""}
        <Col>Name</Col>
        {this.props.relatedSymbols[0] && this.props.relatedSymbols[0].info ?
            Object.keys(this.props.relatedSymbols[0].info).map((key) => <Col key={key} >{key}</Col>) : ""}
        <Col>Thumbnail</Col>
    </Row>


    {this.props.relatedSymbols.map(i => <Row key={i.name}>
        {item.specificOrder ? <Col>{i.number}. </Col> : ""}
        <Col><Link to={`/symbol/${i.name}`}>{i.name}</Link></Col>
        {i.info ?
            Object.values(i.info).map((key) => <Col key={key} >{key}</Col>) : ""}
        <Col><img alt={i.name} src={i.thumbnail} height="64px" /></Col>
    </Row>)}
    </div>
  }
}

export default BasicInfo
