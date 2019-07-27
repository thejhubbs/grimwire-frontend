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
            pantheon: {},
            createdKinds: [],
            usedKinds: [],
            history: [],
            offshoots: []
        }
    }

    componentDidMount = () => { this.updateInfo(); }
    componentWillReceiveProps = (newProps) => {this.updateInfo(newProps);}

      updateInfo = (props = this.props) => {
        const id = parseInt(props.match.params.id)
        const pantheon = this.setPantheon(id)
        this.setState({
            pantheon: pantheon,
            createdKinds: this.getKinds(id, "Created"),
            usedKinds: this.getKinds(id, "Used"),
            history: this.getHistory(pantheon),
            offshoots: this.props.pantheons.filter(item => item.historyIds.indexOf(id) >= 0)
        })
    }

    setPantheon = (id) => {
        return this.props.pantheons.filter(item => item.id == id)[0]
    }

    getHistory(pantheon) { return pantheon ? this.props.pantheons.filter(item => pantheon.historyIds.indexOf(item.id) >= 0) : [] }

    getKinds(id, type) {
        switch (type) {
            case "Created":
                return this.props.kinds.filter(item => id === item.originalPantheonId)
            case "Used":
                return this.props.kinds.filter(item => item.featuredPantheonIds.indexOf(id) >= 0)
            default:
                return "ERROR"
        }
    }


    render() {
        const item = this.state.pantheon
        return typeof item !== 'undefined' && Object.keys(item).length > 0 ? <div>
                <BasicInfo item={item}>
                  <History item={item} history={this.state.history} offshoots={this.state.offshoots} />
                </BasicInfo>

                <ImageGallery item={item} />

                <Collections usedKinds={this.state.usedKinds} createdKinds={this.state.createdKinds} />

                <Row className="forms">
                    <Col className=""><FormInsert item={item} key={item.id} formClass={"pantheons"} /></Col>
                    <Col className=""><FormInsert item={defaultKind} formClass={"kinds"} /></Col>
                </Row>
            </div> : "Loading... Or object not found."

    }
}

const mapStateToProps = state => {
    return {
        pantheons: state.pantheons,
        kinds: state.kinds
    }
}

export default connect(mapStateToProps)(PantheonPage);
