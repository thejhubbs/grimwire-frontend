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
        { Object.entries( item.extraInfoDefault ).map( (entry) => <Col key={entry[0]}> {entry[0]} </Col> ) }
        <Col>Thumbnail</Col>
    </Row>


    {this.props.relatedSymbols.map(i => <Row key={i.name}>
        {item.specificOrder ? <Col>{i.number}. </Col> : ""}
        <Col><Link to={`/symbol/${i.id}`}>{i.name}</Link></Col>
        {i.info ?
            Object.entries( item.extraInfoDefault ).map( (entry) => <Col key={entry[0]}> {  i.info[entry[0]]  } </Col> ) : ""}
        <Col><img alt={i.name} src={i.thumbnail} height="64px" /></Col>
    </Row>)}
    </div>
  }
}

export default BasicInfo
