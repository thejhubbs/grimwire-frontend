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
    const kind = this.props.kind

    return <div>
      <img src={item.thumbnail} alt={item.name}  width="100px" />
      <h1>{item.number ? item.number + ". " : ''} {item.name}</h1>

      <Row>
          <Col lg={8}>
              <h4>Basic Information</h4>
              <i>Also Spelled: {item.otherSpellings.join(", ")} </i>
              { kind.id ?
                <p>Collection: <Link to={ `/collection/${kind.id}` }> {kind.name} </Link></p>
                :""
              }
              <p>Used by: {this.props.pantheons.map(i => <Link key={i.id} to={`/pantheon/${i.id}`}> {i.name} </Link>)}</p>
              <p>Short Description: {item.description}</p>
          </Col>
          <Col lg={4}>
              <h4>Key Information</h4>
              { item.info ? Object.entries(item.info).map(infoEntry => <div key={infoEntry[0]} >{infoEntry[0]}: {infoEntry[1]}</div>) : "" }
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
