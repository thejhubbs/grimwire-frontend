import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class RelatedSymbols extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
            symbol: {},
            relatedSymbols: []
       }
    }

    componentDidMount = () => {
        const symbolName = this.props.match.params.name
        const symbol = this.props.symbols.filter(item => item.name === symbolName)[0]

        const relatedSymbols = this.props.symbols.filter(item => item.kind === symbol.kind)

        this.setState({symbol: symbol, relatedSymbols: relatedSymbols})
    }
    
    componentWillReceiveProps = (newProps) => {
        const symbolName = newProps.match.params.name
        const symbol = this.props.symbols.filter(item => item.name === symbolName)[0]

        const relatedSymbols = this.props.symbols.filter(item => item.kind === symbol.kind)

        this.setState({symbol: symbol, relatedSymbols: relatedSymbols})
    }

    render() {
        return <div>
            <h5>More {this.state.symbol.kind}</h5>
            {
                this.state.relatedSymbols.map(item => <div>
                    <Link to={`/symbol/${item.name}`}>{item.name}</Link> <br />
                </div>)
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        symbols: state.symbols,
    }
}

export default connect(mapStateToProps)(RelatedSymbols)