import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class RelatedKinds extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
            kind: {},
            categories: []
       }
    }

    componentDidMount = () => {
        const name = this.props.match.params.name
        const kinds = this.props.kinds.filter(item => item.name === name)
        const kind = kinds.length > 0 ? kinds[0] : {}
        const categories = kind.name ? this.props.categories.filter(item => item.kinds.indexOf(name) >= 0) : []
        this.setState({ kind: kind, categories: categories })
    }

    render() {
        const item = this.state.item
        return typeof item !== 'undefined' && Object.keys(item).length > 0 ? <div>
            {this.state.kind.name} included in:<br />
            {this.state.categories.map(item => <div key={item.name}>
                <Link to={`/category/${item.name}`}>{item.name}</Link>
            </div>)}
        </div> : ""
    }
}

const mapStateToProps = (state) => {
    return {
        kinds: state.kinds,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(RelatedKinds)
