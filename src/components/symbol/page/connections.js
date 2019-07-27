import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import FormInsert from '../../forms/insert'

function Titles(props) {
    const conn = props.connections.filter(item => item.relationship === 5)
    return conn.length > 0 ? <div>
    <h3>Alternate Names & Titles</h3>
    {conn.map(item => <div key={item.connected}>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength})</Link> <FormInsert item={item} formClass={"connections"} />
    </div>)}
    </div> : ""
}

function Properties(props) {
    const conn = props.connections.filter(item => item.relationship === 4);
    return conn.length > 0 ? <div>
    <h3>Properties & Dominions</h3>
    {conn.map(item => <div key={item.connected}>
        <Link to={`/symbol/${item.connected}`}> {item.connected} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
    </div>)}
    </div> : ""
}

function Related(props) {
    const conn = props.connections.filter(item => item.relationship === 2)
    return conn.length > 0 ? <div><h3>Family & Related</h3>
    {conn.map(item => <div key={item.connected}>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
    </div>)}
</div> : ""
}

function Mentions(props) {
    const conn = props.connections.filter(item => item.relationship === 1)
    return conn.length > 0 ? <div><h3>Stories</h3>
    {conn.map(item => <div key={item.connected}>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
    </div>)}
</div> : ""
}

function Sources(props) {
    const conn = props.connections.filter(item => item.relationship === 0);
    return conn.length > 0 ? <div>
    <h3>Sources</h3>
    {conn.map(item => <div key={item.connected}>
        <Link to={`/symbol/${item.connected}`}> {item.connected} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
    </div>)}
    </div> : ""
}

function Attributes(props) {
    const conn = props.connections.filter(item => item.relationship === 3)

    return conn.length > 0 ? <div>
    <h3>Attributes & Associations</h3>
    {conn.map(item => <div key={item.connected}>
        {
            props.symbols.filter(i => i.name === item.connected).map(j => <div key={j.name}>
                {j.kind}: <Link to={`/symbol/${j.name}`}>{j.name} ({item.strength}) </Link> <FormInsert item={item} formClass={"connections"} />
            </div>)
        }
    </div>)}
</div> : ""
}

export default function Connections(props){
  return <Row>
      <Col xs={12} lg={6} >
          <Titles item={props.item} connections={props.connections} />
          <Properties item={props.item} connections={props.connections} />
          <Related item={props.item} connections={props.connections} />
          <Mentions item={props.item} connections={props.connections}  />
          <Sources item={props.item} connections={props.connections}  />
      </Col>
      <Col xs={12} lg={6} >
          <Attributes item={props.item} connections={props.connections} updateConnections={props.updateConnections} symbols={props.symbols} />
      </Col>
  </Row>
}
