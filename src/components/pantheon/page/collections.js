import React from 'react'
import {Link} from 'react-router-dom'

class Collections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {createdKinds, usedKinds} = this.props
    return <div>
        <h4>Created</h4>
        {createdKinds.map(item => <Link key={item.name} to={`/collection/${item.name}`}>{item.name}</Link>)}

        <h4>Uses</h4>
        {usedKinds.map(item => <Link  key={item.name} to={`/collection/${item.name}`}>{item.name}</Link> )}
    </div>
  }
}

export default Collections
