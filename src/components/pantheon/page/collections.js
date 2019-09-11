import React from 'react'
import {Link} from 'react-router-dom'

class Collections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {created_kinds, uses_kinds} = this.props.item
    return <div>
        <h4>Created</h4>
        {created_kinds.map(item => <Link key={item.kind_name} to={`/collection/${item.kind_id}`}>{item.kind_name}</Link>)
        }
        <h4>Uses</h4>
        {uses_kinds.map(item => <Link  key={item.kind_name} to={`/collection/${item.kind_id}`}>{item.kind_name}</Link> )
        }
    </div>
  }
}

export default Collections
