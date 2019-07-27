import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

import FormInsert from '../forms/insert'
import {defaultKind} from '../../db/defaultObjects'

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.categories[0],
            relatedKinds: [this.props.kinds[0]]
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
        const name = props.match.params.name
        const category = this.props.categories.filter(item => item.name === name)[0]
        const related = this.props.kinds.filter(item => item.category === category.name)
        this.setState({category: category,relatedKinds: related})
    }

    render() {
        const item = this.state.category
        return <div>

            <div className="category-info">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>

            <div className="category-list">
                <Row>
                    <Col lg={8}>
                        <h4>Overview & History</h4>
                        <p>{item.overviewText}</p>
                        <h4>Sources & Getting Started</h4>
                        <p>{item.sourcesText}</p>
                    </Col>
                    <Col lg={4}>
                        <h4>Collections</h4>
                        {item.kinds.map(i => <Link key={i} to={`/collection/${i}`}>{i}</Link>)}
                    </Col>
                </Row>

            </div>

                        <Row className="forms">
                            <Col className=""><FormInsert item={item} key={item.name} formClass={"categories"} /></Col>
                            <Col className=""><FormInsert item={defaultKind} formClass={"kinds"} /></Col>
                        </Row>


        </div>

    }
}

const mapStateToProps = state => {
    return {
      categories: state.categories,
      kinds: state.kinds
    }
  }

export default connect(mapStateToProps)(CategoryPage);
