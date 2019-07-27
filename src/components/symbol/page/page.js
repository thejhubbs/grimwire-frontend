import React from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/insert'

import BasicInfo from './basicInfo'
import ImageGallery from '../../imageGallery/gallery'
import Connections from './connections'

import {defaultConnection} from '../../../db/defaultObjects'

class SymbolPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: {},
            connections: [],
            activeConnection: defaultConnection
        }
    }

    componentDidMount = () => { this.updateSymbolAndConnections() }
    componentWillReceiveProps = (newProps) => { this.updateSymbolAndConnections(newProps) }
    updateSymbolAndConnections = (props = this.props) => {

        const name = props.match.params.name
        const symbols = this.props.symbols.filter(item => item.name === name)
        const symbol = symbols.length > 0 ? symbols[0] : {}
        const connections = symbol.name ? this.props.connections.filter(item => name === item.main) : []

        this.setState({ symbol: symbol, connections: connections })
    }

    render() {
        const item = this.state.symbol
        const activeConnection = this.state.activeConnection
        return <div>
          { typeof item !== 'undefined' && Object.keys(item).length > 0 ?
            <div>
              <BasicInfo item={item} />
              <ImageGallery item={item} />
              <Connections item={item} connections={this.state.connections} symbols={this.props.symbols}/>

               <Row className="forms">
                   <Col><FormInsert item={item} key={item.name} formClass={"symbols"} /></Col>
                   <Col><FormInsert item={activeConnection} key={activeConnection.connected} formClass={"connections"} /></Col>
              </Row>


            </div>
            : "Loading or not found" }
         </div>
    }
}

const mapStateToProps = state => {
    return {
        symbols: state.symbols,
        connections: state.connections,
        kinds: state.kinds
    }
}

export default connect(mapStateToProps)(SymbolPage);
