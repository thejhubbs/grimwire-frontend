import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class RelatedPantheons extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
            pantheon: {},
            categories: [],
            history: [],
            offshoots: []
       }
    }

    componentDidMount = () => {
        this.updateInfo();
    }

    componentWillReceiveProps = (newProps) => {
        this.updateInfo(newProps)
    }

    updateInfo = (props = this.props) => {
        const pantheonName = props.match.params.name
        const pantheon = this.props.pantheons.filter(item => item.name === pantheonName)[0]
        const history = this.props.pantheons.filter(item => pantheon.history.indexOf(item.name) >= 0)
        const offshoots = this.props.pantheons.filter(item => item.history.indexOf(pantheonName) >= 0)

        this.setState({pantheon, history, offshoots})
    }

    render() {
        return <div>
            <h5>History</h5>
            { this.state.history.map(item => <div key={item.name} >
                <Link to={`/pantheon/${item.name}`}>{item.name}</Link><br />
            </div>) }
            <hr />
            <h5>Offshoots</h5>
            { this.state.offshoots.map(item => <div key={item.name} >
                <Link to={`/pantheon/${item.name}`}>{item.name}</Link><br />
            </div>)}
            
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        pantheons: state.pantheons,
    }
}

export default connect(mapStateToProps)(RelatedPantheons)