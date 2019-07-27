import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import FormInsert from '../../forms/insert'


function Display(props) {
  const p = props.props
  const number = props.number
  const title = props.title

  const conn = p.connections.filter(item => item.relationship === number)
  
  return conn.length > 0 ? <div>
  <h3>{title}</h3>
  {conn.map(item => <div key={item.connectedId}>
      {
          p.symbols.filter(i => i.id === item.connectedId).map(connectedSymbol => <div key={connectedSymbol.id}>
              {p.kinds.filter(item => item.id === connectedSymbol.kindId)[0].name}: <Link to={`/symbol/${connectedSymbol.id}`}>{connectedSymbol.name} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
          </div>)
      }
  </div>)}
  </div> : ""

}

export default function Connections(props){
  console.log("Props in main:", props)
  return <Row>
      <Col xs={12} lg={6} >
        <Display props={props} number={"5"} title={"Alternate Names & Titles"} />
        <Display props={props} number={"4"} title={"Properties"} />
        <Display props={props} number={"2"} title={"Related"} />
        <Display props={props} number={"1"} title={"Mentions, Stories, Teachings"} />
        <Display props={props} number={"0"} title={"Sources"} />
      </Col>
      <Col xs={12} lg={6} >
        <Display props={props} number={"3"} title={"Attributes & Associations"} />
      </Col>
  </Row>
}
