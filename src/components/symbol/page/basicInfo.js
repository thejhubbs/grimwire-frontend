import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.item

    return <div>
      <img src={item.thumbnail} alt={item.symbol_name}  width="100px" />
      <h1>{item.number ? item.number + ". " : ''} {item.symbol_name}</h1>

      <Row>
          <Col lg={8}>
              <h4>Basic Information</h4>
              <i>Also Spelled: { item.otherSpellings } </i>
              {/*
                 kind.id ?
                <p>Collection: <Link to={ `/collection/${kind.id}` }> {kind.name} </Link></p>
                :""
              */}
              <p>Used by: {/* this.props.pantheons.map(i => <Link key={i.id} to={`/pantheon/${i.id}`}> {i.name} </Link>) */}</p>
              <p>Short Description: {item.symbol_description}</p>
          </Col>
          <Col lg={4}>
              <h4>Key Information</h4>
              { /* item.info ? Object.entries(kind.extraInfoDefault).map(infoEntry => <div key={infoEntry[0]} >
                {infoEntry[0]}: {item.info[infoEntry[0]] }
              </div>) : "" */ }
          </Col>
      </Row>

      <div>
          <h4>Background:</h4>
          {item.backgroundText}
          <h4>Meaning:</h4>
          {item.meaningText}
      </div>

    </div>
  }
}

export default BasicInfo
