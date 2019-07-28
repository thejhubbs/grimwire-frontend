import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/insert'
import {defaultSymbol} from '../../../db/defaultObjects'
import BasicInfo from './basicInfo'
import SymbolList from './symbolList'
import ImageGallery from '../../imageGallery/gallery'

class KindPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: {},
            relatedSymbols: [],
            createdBy: {},
            usedBy: []
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
        const id = props.match.params.id
        const kinds = this.props.kinds.filter(item => item.id === id)
        const kind = kinds.length > 0 ? kinds[0] : {}
        const relatedSymbols = kind.name ? this.props.symbols.filter(item => item.kindId === id) : []
        const createdBy = kind.name ? this.props.pantheons.filter(item => kind.originalPantheonId === item.id )[0] : {}
        const usedBy = kind.name ? this.props.pantheons.filter(item => kind.featuredPantheonIds.indexOf(item.id) >= 0 ) : []

        console.log(relatedSymbols)
        this.setState({ kind, relatedSymbols, createdBy, usedBy })
    }



    defaultSymbolWithInfo = () => {
        const item = this.state.kind
        return {
            ...defaultSymbol,
            info: item.extraInfoDefault,
        }
    }

    render() {
        const item = this.state.kind
        return typeof item !== 'undefined' && Object.keys(item).length > 0 ? <div>

            <BasicInfo item={item} createdBy={this.state.createdBy} usedBy={this.state.usedBy} />
            <ImageGallery item={item} />
            <SymbolList item={item} relatedSymbols={this.state.relatedSymbols} />

            <Row className="forms">
                <Col className=""><FormInsert item={item} key={item.name} formClass={"kinds"} /></Col>
                <Col className=""><FormInsert item={this.defaultSymbolWithInfo()} formClass={"symbols"} /></Col>
            </Row>
        </div> : "Loading or not found"

    }
}

const mapStateToProps = state => {
    return {
        kinds: state.kinds,
        symbols: state.symbols,
        pantheons: state.pantheons
    }
}

export default connect(mapStateToProps)(KindPage);
