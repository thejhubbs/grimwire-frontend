import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/insert'
import {defaultSymbol} from '../../../db/defaultObjects'

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

            <div className="kind-info">
                <img src={item.thumbnail} alt={item.name}  height="100px" />
                <h1>{item.name}</h1>
                <Row>
                    <Col lg={4}>
                        <p>{item.description}</p>
                        <p>Created By: <Link to={`/pantheon/${item.originalPantheon}`}>{item.originalPantheon}</Link></p>
                        <p>Used By:
                {item.featuredPantheons.map(i =>
                            <Link key={i} to={`/pantheon/${i}`}>{i}</Link>
                        )}</p>
                    </Col>
                    <Col lg={8}>
                        <h4>Theory & Application</h4>
                        <p>{item.theoryInfo}</p>
                        <h4>History & Background</h4>
                        <p>{item.historyInfo}</p>
                    </Col>
                </Row>



            </div>

            <div className="image-gallery">
                <hr />
                <h4>Images:</h4>
                {item.images.map(image => <img  key={image} src={image} height="200px" alt={item.name} />)}
                <hr />
            </div>

            <div className="kind-list">
                <h3>List of Items</h3>

                <Row>
                    {item.specificOrder ? <Col>#</Col> : ""}
                    <Col>Name</Col>
                    {this.state.relatedSymbols[0] && this.state.relatedSymbols[0].info ?
                        Object.keys(this.state.relatedSymbols[0].info).map((key) => <Col key={key} >{key}</Col>) : ""}
                    <Col>Thumbnail</Col>
                </Row>


                {this.state.relatedSymbols.map(i => <Row key={i.name}>
                    {item.specificOrder ? <Col>{i.number}. </Col> : ""}
                    <Col><Link to={`/symbol/${i.name}`}>{i.name}</Link></Col>
                    {i.info ?
                        Object.values(i.info).map((key) => <Col key={key} >{key}</Col>) : ""}
                    <Col><img alt={i.name} src={i.thumbnail} height="64px" /></Col>
                </Row>)}
            </div>



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
