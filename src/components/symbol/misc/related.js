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
      this.updateInformation()
    }

    componentWillReceiveProps = (newProps) => {
        this.updateInformation(newProps)
    }

    updateInformation = (props = this.props) => {

                    const name = props.match.params.name
                    const symbols = this.props.symbols.filter(item => item.name === name)
                    const symbol = symbols.length > 0 ? symbols[0] : {}
                    const relatedSymbols = symbol.name ? this.props.symbols.filter(item => item.kind === symbol.kind).slice(1, 30) : []

              this.setState({symbol: symbol, relatedSymbols: relatedSymbols})
    }

    render() {
        const symbols = this.state.relatedSymbols
        return typeof symbols !== 'undefined' && symbols.length > 0 ? <div>
            <h5>More {this.state.symbol.kind}</h5>
            {
                symbols.map(item => <span  key={item.name} >
                    <Link to={`/symbol/${item.name}`}>{item.name}</Link>
                      { symbols.length < 13 ? <br /> : "" }
                </span>)
            }
        </div> : ""
    }
}

const mapStateToProps = (state) => {
    return {
        symbols: state.symbols,
    }
}

export default connect(mapStateToProps)(RelatedSymbols)
