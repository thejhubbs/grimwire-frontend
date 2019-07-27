import React from 'react'

class DownloadDatabase extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: ""
        }
    }

    componentDidMount = () => {
        this.setState({info: localStorage.getItem(this.props.match.params.name)})
    }

    render() {
        return this.state.info
        
    }
}

export default DownloadDatabase