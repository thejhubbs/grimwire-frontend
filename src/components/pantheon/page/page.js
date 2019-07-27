import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/insert'
import {defaultKind} from '../../../db/defaultObjects'

class PantheonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pantheon: this.props.pantheons[0],
            createdKinds: [],
            usedKinds: [],
            history: [],
            offshoots: []
        }
    }

    componentDidMount = () => { this.updateInfo(); }
    componentWillReceiveProps = (newProps) => {this.updateInfo(newProps);}

      updateInfo = (props = this.props) => {
        const name = props.match.params.name
        const pantheon = this.setPantheon(name)
        this.setState({
            pantheon: pantheon,
            createdKinds: this.getKinds(name, "Created"),
            usedKinds: this.getKinds(name, "Used"),
            history: this.props.pantheons.filter(item => pantheon.history.indexOf(item.name) >= 0),
            offshoots: this.props.pantheons.filter(item => item.history.indexOf(name) >= 0)
        })
    }

    setPantheon = (name) => {
        return this.props.pantheons.filter(item => item.name === name)[0]
    }

    getKinds(name, type) {
        switch (type) {
            case "Created":
                return this.props.kinds.filter(item => name === item.originalPantheon)
            case "Used":
                return this.props.kinds.filter(item => item.featuredPantheons.indexOf(name) >= 0)
            default:
                return "ERROR"
        }
    }

    yearRange = (item) => {
        var startYearString = item.startYear > 0 ? item.startYear + "AD" : item.startYear * -1 + "BC"
        var endYearString = item.endYear > 0 ?
            item.endYear === 2100 ? "Present" : item.endYear + "AD" :
            item.endYear * -1 + "BC"
        return startYearString + " - " + endYearString;
    }

    render() {
        const item = this.state.pantheon
        return <div>
            <img src={item.thumbnail}  alt={item.name} width="100px"/>
            <h1>{item.name}</h1>
            <Row>
                <Col>
                    <h4>Overview</h4>
                    <p>{item.overviewInfo}</p>
                </Col>
                <Col>
                    <p>{item.description}</p>
                    <p>{this.yearRange(item)}</p>
                    History:
                    {this.state.history.length > 0 ? this.state.history.map(item => <span key={item.name}>
                        <Link to={`/pantheon/${item.name}`}>{item.name}</Link>
                    </span>) : "N/a" }<br />
                    Offshoots:
                    { this.state.offshoots.length > 0 ? this.state.offshoots.map(item => <span key={item.name}>
                        <Link to={`/pantheon/${item.name}`}>{item.name}</Link>
                    </span>) : "N/a"}<br />
                </Col>
            </Row>

            <div>
                <h4>History & Background</h4>
                <p>{item.historyInfo}</p>
                <h4>Culture & Advancements</h4>
                <p>{item.cultureInfo}</p>
            </div>


            <div className="image-gallery">
                <h4>Images:</h4>
                <hr />
                {item.images.map(image => <img key={image} src={image} height="200px" alt={item.name} />)}
                <hr />
            </div>

            <div className="pantheon-list">
                <h4>Created</h4>
                {this.state.createdKinds.map(item => <Link key={item.name} to={`/collection/${item.name}`}>{item.name}</Link>)}

                <h4>Uses</h4>
                {this.state.usedKinds.map(item => <Link  key={item.name} to={`/collection/${item.name}`}>{item.name}</Link> )}
            </div>

            <Row className="forms">
                <Col className=""><FormInsert item={item} key={item.name} formClass={"pantheons"} /></Col>
                <Col className=""><FormInsert item={defaultKind} formClass={"kinds"} /></Col>
            </Row>

        </div>

    }
}

const mapStateToProps = state => {
    return {
        pantheons: state.pantheons,
        kinds: state.kinds
    }
}

export default connect(mapStateToProps)(PantheonPage);