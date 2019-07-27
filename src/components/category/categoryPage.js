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
            category: {},
            relatedKinds: []
        }
    }

    componentDidMount = () => { this.updatePage() }
    componentWillReceiveProps = (newProps) => { this.updatePage(newProps) }

    updatePage = (props = this.props) => {
        const id = parseInt(props.match.params.id)
        const categories = this.props.categories.filter(item => item.id === id)
        const category = categories.length > 0 ? categories[0] : {}
        const related = category.name ? this.props.kinds.filter(item => category.kindIds.indexOf(item.id) >= 0) : []
        console.log(id, categories, category, related)
        this.setState({category: category,relatedKinds: related})
    }

    render() {
        const item = this.state.category
        return typeof item !== 'undefined' && Object.keys(item).length > 0 ? <div>

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

                        {this.state.relatedKinds.map(i => <Link key={i.id} to={`/collection/${i.id}`}>{i.name}</Link>)}
                    </Col>
                </Row>

            </div>

                        <Row className="forms">
                            <Col className=""><FormInsert item={item} key={item.name} formClass={"categories"} /></Col>
                            <Col className=""><FormInsert item={defaultKind} formClass={"kinds"} /></Col>
                        </Row>


        </div> : "Loading or not found"

    }
}

const mapStateToProps = state => {
    return {
      categories: state.categories,
      kinds: state.kinds
    }
  }

export default connect(mapStateToProps)(CategoryPage);
