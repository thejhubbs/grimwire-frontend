import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import KindForm from './kindForm';
import SymbolForm from '../symbol/symbolForm';
import { Row, Col } from 'react-bootstrap'

class KindPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: this.props.kinds[0],
            relatedSymbols: [this.props.symbols[0]],
            showSymbolForm: false,
            showKindForm: false
        }
    }

    componentDidMount = () => {
        const kind = this.props.kinds.filter(item => item.name === this.props.match.params.name)[0]
        const related = this.props.symbols.filter(item => item.kind === kind.name)
        this.setState({ kind: kind, relatedSymbols: related })
    }


    toggleSymbolForm = (e) => {
        this.setState({ showSymbolForm: !this.state.showSymbolForm })
    }

    toggleKindForm = (e) => {
        this.setState({ showKindForm: !this.state.showKindForm })
    }

    render() {
        const item = this.state.kind
        return <div>

            <div className="kind-info">
                <img src={item.thumbnail} height="100px" />
                <h1>{item.name}</h1>
                <Row>
                    <Col lg={4}>
                        <p>{item.description}</p>
                        <p>Created By: <Link to={`/pantheon/${item.originalPantheon}`}>{item.originalPantheon}</Link></p>
                        <p>Used By:
                {item.featuredPantheons.map(i =>
                            <Link to={`/pantheon/${i}`}>{i}</Link>
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

            <div>
                <h4>Images:</h4>
                {item.images.map(image => <img key={image} src={image} height="100px" alt={item.name} />)}
            </div>

            <div className="kind-list">
                <h3>List of Items</h3>

                <Row>
                    <Col> </Col>
                    {item.specificOrder ? <Col>#</Col> : ""}
                    <Col>Name</Col>
                    {this.state.relatedSymbols[0] && this.state.relatedSymbols[0].info ?
                        Object.keys(this.state.relatedSymbols[0].info).map((key) => <Col>{key}</Col>) : ""}
                </Row>


                {this.state.relatedSymbols.map(i => <Row>
                    <Col><img src={i.thumbnail} height="32px" /></Col>
                    {item.specificOrder ? <Col>{i.number}. </Col> : ""}
                    <Col><Link to={`/symbol/${i.name}`}>{i.name}</Link></Col>
                    {i.info ?
                        Object.values(i.info).map((key) => <Col>{key}</Col>) : ""}
                </Row>)}
            </div>



            <Row className="forms">
                <Col className="">
                    <button onClick={this.toggleKindForm}>Edit {item.name} ({this.state.showKindForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showKindForm ? <KindForm kind={item} key={item.name} /> : ""}
                    </div>
                </Col>
                <Col className="">
                    <button onClick={this.toggleSymbolForm}>Add New Item ({this.state.showSymbolForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showSymbolForm ? <SymbolForm symbol={{
                            kind: item.name,
                            pantheons: [item.originalPantheon],
                            name: "",
                            otherSpellings: [],
                            description: "",
                            images: [],
                            number: 0
                        }} /> : ""}
                    </div>
                </Col>
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