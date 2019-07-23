import React from 'react'
import {connect} from 'react-redux'


class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount = () => {
        const userId = this.props.match.params.id
        console.log(this.props)
        this.setState({user: this.props.users[userId]})
    }

    render() {
        return <div>
            {this.state.user.name}<br />
            {this.state.user.email}<br />
            {this.state.user.role}<br />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(LogIn)