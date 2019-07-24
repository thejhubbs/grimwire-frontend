import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Titles, Properties, Attributes, Related, Mentions, Sources } from './info'
import ConnectionForm from '../connection/connectionForm';
import SymbolForm from '../symbol/symbolForm'

class SymbolPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: this.props.symbols[0],
            connections: [],
            activeConnection: {
                main: "",
                connected: "",
                description: "",
                relationship: 0,
                strength: 0
            },
            showSymbolForm: false,
            showConnectionForm: false
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

    toggleSymbolForm = (e) => {
        this.setState({ showSymbolForm: !this.state.showSymbolForm })
    }

    toggleConnectionForm = (e) => {
        this.setState({ showConnectionForm: !this.state.showConnectionForm })
    }

    render() {
        const item = this.state.symbol
        return <div>
            <img src={item.thumbnail} alt={item.name}  width="100px" />
            <h1>{item.number ? item.number + ". " : ''} {item.name}</h1>

            <Row>
                <Col lg={8}>
                    <h4>Basic Information</h4>
                    <i>Also Spelled: {item.otherSpellings.join(", ")} </i>
                    <p>Collection: <Link to={`/collection/${item.kind}`}>{item.kind}</Link></p>
                    <p>Used by: {item.pantheons.map(i => <Link key={i} to={`/pantheon/${i}`}> {i} </Link>)}</p>
                    <p>Short Description: {item.description}</p>
                </Col>
                <Col lg={4}>
                    <h4>Key Information</h4>
                    { item.info ? Object.entries(item.info).map(infoEntry => <div key={infoEntry[0]} >{infoEntry[0]}: {infoEntry[1]}</div>) : "" }
                </Col>
            </Row>

            <div>
                <h4>Background:</h4>
                {item.backgroundInfo}
                <h4>Meaning:</h4>
                {item.meaningInfo}
            </div>
            
            <div className="image-gallery">
                <hr />
                <h4>Images:</h4>
                {item.images.map(image => <img  key={image} src={image} height="200px" alt={item.name} />)}
                <hr />
            </div>

            <Row>
                <Col xs={12} lg={6} >
                    <Titles item={item} connections={this.state.connections} />
                    <Properties item={item} connections={this.state.connections} />
                    <Related item={item} connections={this.state.connections} />
                    <Mentions item={item} connections={this.state.connections}  />
                    <Sources item={item} connections={this.state.connections}  />
                </Col>
                <Col xs={12} lg={6} >
                    <Attributes item={item} connections={this.state.connections} symbols={this.props.symbols} />
                </Col>
            </Row>
            
            <Row className="forms">
                <Col className="">
                    <button onClick={this.toggleSymbolForm}>Edit {item.name} ({this.state.showSymbolForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showSymbolForm ? <SymbolForm key={item.name} symbol={item} /> : ""}
                    </div>
                </Col>
                <Col className="">
                    <button onClick={this.toggleConnectionForm}>Add Connection ({this.state.showConnectionForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showConnectionForm ? <ConnectionForm key={this.state.activeConnection.connected} connection={this.state.activeConnection} /> : ""}
                    </div>
                </Col>
            </Row>



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