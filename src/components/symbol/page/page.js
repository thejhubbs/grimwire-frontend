import React from 'react';
import axios from 'axios'
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
            symbol: {}
        }
    }

    componentDidMount = () => { this.updateSymbolAndConnections() }
    componentWillReceiveProps = (newProps) => { this.updateSymbolAndConnections(newProps) }
    updateSymbolAndConnections = (props = this.props) => {
      axios
          .get(`http://localhost:4001/api/symbols/#{props.id}`)
          .then(res =>
            this.setState({symbol: res.data})
          )
          .catch(err => console.log(err) );
    }

    render() {
        const item = this.state.symbol
        const activeConnection = this.state.activeConnection
        return <div>
          { typeof item !== 'undefined' && Object.keys(item).length > 0 ?
            <div>
              <BasicInfo item={item} />
              <ImageGallery item={item} />
              <Connections item={item} />

               <Row className="forms">
                   <Col><FormInsert item={item} key={item.symbol_name} formClass={"symbols"} /></Col>
                   <Col><FormInsert item={activeConnection} key={activeConnection} formClass={"connections"} /></Col>
              </Row>


            </div>
            : "Loading or not found" }
         </div>
    }
}

export default SymbolPage;
