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
        const kindName = this.props.match.params.name
        const kind = this.props.kinds.filter(item => item.name === kindName)[0]
        const categories = this.props.categories.filter(item => item.kinds.indexOf(kindName) >= 0)
        this.setState({kind, categories})
    }

    render() {
        return <div>
            {this.state.kind.name} included in:<br />
            {this.state.categories.map(item => <div>
                <Link to={`/category/${item.name}`}>{item.name}</Link>
            </div>)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        kinds: state.kinds,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(RelatedKinds)