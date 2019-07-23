import React from 'react'
import {Link} from 'react-router-dom'

export function Titles(props) {
    const conn = props.connections.filter(item => item.relationship === 5)
    return conn.length > 0 ? <div>
    <h3>Alternate Names & Titles</h3>
    {conn.map(item => <div>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength})</Link>
    </div>)}
</div> : ""
}

export function Properties(props) {
    const conn = props.connections.filter(item => item.relationship === 4);
    return conn.length > 0 ? <div>
    <h3>Properties & Dominions</h3>
    {conn.map(item => <div>
        <Link to={`/symbol/${item.connected}`}> {item.connected} ({item.strength}) </Link>
    </div>)}
    </div> : ""
}

export function Attributes(props) { 
    const conn = props.connections.filter(item => item.relationship === 3)
    return conn.length > 0 ? <div>
    <h3>Attributes & Associations</h3>
    {conn.map(item => <div>
        {
            props.symbols.filter(i => i.name === item.connected).map(j => <div>
                {j.kind}: <Link to={`/symbol/${j.name}`}>{j.name} ({item.strength}) </Link>
            </div>)
        }
    </div>)}
</div> : ""
}

export function Related(props) { 
    const conn = props.connections.filter(item => item.relationship === 2)
    return conn.length > 0 ? <div><h3>Family & Related</h3>
    {conn.map(item => <div>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength}) </Link>
    </div>)}
</div> : ""
}

export function Mentions(props) { 
    const conn = props.connections.filter(item => item.relationship === 1)
    return conn.length > 0 ? <div><h3>Stories</h3>
    {conn.map(item => <div>
        <Link to={`/symbol/${item.connected}`}>{item.connected} ({item.strength}) </Link>
    </div>)}
</div> : ""
}

export function Sources(props) {
    const conn = props.connections.filter(item => item.relationship === 0);
    return conn.length > 0 ? <div>
    <h3>Sources</h3>
    {conn.map(item => <div>
        <Link to={`/symbol/${item.connected}`}> {item.connected} ({item.strength}) </Link>
    </div>)}
    </div> : ""
}