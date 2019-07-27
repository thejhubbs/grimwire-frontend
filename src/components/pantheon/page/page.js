import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../../forms/insert'
import {defaultKind} from '../../../db/defaultObjects'

import BasicInfo from './basicInfo'
import History from './history'
import Collections from './collections'
import ImageGallery from '../../imageGallery/gallery'

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


    render() {
        const item = this.state.pantheon
        return <div>
            <BasicInfo item={item}>
              <History item={item} history={this.state.history} offshoots={this.state.offshoots} />
            </BasicInfo>

            <ImageGallery item={item} />

            <Collections usedKinds={this.state.usedKinds} createdKinds={this.state.createdKinds} />

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
