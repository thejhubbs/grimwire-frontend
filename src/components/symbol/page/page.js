import React from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import DisplayForm from '../../forms/display'
import ConnectionForm from '../../connection/connectionForm';
import SymbolForm from '../misc/form'

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
        this.setState({
            symbol: this.props.symbols.filter(item => item.name === name)[0],
            connections: this.props.connections.filter(item => name === item.main)
        })
    }

    render() {
        const item = this.state.symbol
        return <div>
          { item.name ?
            <div>
              <BasicInfo item={item} />
              <ImageGallery item={item} />
              <Connections item={item} connections={this.state.connections} symbols={this.props.symbols}/>
              <Row className="forms">
                  <Col className="">
                      <DisplayForm form={SymbolForm} item={item} />
                  </Col>
                  <Col className="">
                      <DisplayForm form={ConnectionForm} item={this.state.activeConnection} />
                  </Col>
              </Row>
            </div>
            : "Loading" }
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
