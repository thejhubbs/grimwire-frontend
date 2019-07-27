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
            kind: this.props.kinds[0],
            relatedSymbols: [this.props.symbols[0]],
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
        const name = props.match.params.name
        const kind = this.props.kinds.filter(item => item.name === name)[0]
        const related = this.props.symbols.filter(item => item.kind === kind.name)
        this.setState({ kind: kind, relatedSymbols: related })
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
        return <div>

            <BasicInfo item={item} />
            <ImageGallery item={item} />
            <SymbolList item={item} relatedSymbols={this.state.relatedSymbols} />

            <Row className="forms">
                <Col className=""><FormInsert item={item} key={item.name} formClass={"kinds"} /></Col>
                <Col className=""><FormInsert item={this.defaultSymbolWithInfo()} formClass={"symbols"} /></Col>
            </Row>


        </div>

    }
}

const mapStateToProps = state => {
    return {
        kinds: state.kinds,
        symbols: state.symbols
    }
}

export default connect(mapStateToProps)(KindPage);
