import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
 
import CategoryForm from './categoryForm';
import KindForm from '../kind/kindForm';
import { Row, Col } from 'react-bootstrap'

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.categories[0],
            relatedKinds: [this.props.kinds[0]],
            showKindForm: false,
            showCategoryForm: false
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

    
    toggleKindForm = (e) => {
        this.setState({ showKindForm: !this.state.showKindForm })
    }

    toggleCategoryForm = (e) => {
        this.setState({ showCategoryForm: !this.state.showCategoryForm })
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
                        {item.kinds.map(i => <Link to={`/collection/${i}`}>{i}</Link>)}
                    </Col>
                </Row>

            </div>

            

            <Row className="forms">
                <Col className="">
                    <button onClick={this.toggleCategoryForm}>Edit {item.name} ({this.state.showCategoryForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showCategoryForm ? <CategoryForm category={item} key={item.name} /> : ""}
                    </div>
                </Col>
                <Col className="">
                    <button onClick={this.toggleKindForm}>Add New Item ({this.state.showKindForm ? "-" : "+"})</button>
                    <div className="theForm">
                        {this.state.showKindForm ? <KindForm kind={{
                name: "",
                description: "",
                originalPantheon: "",
                featuredPantheons: [],
                specificOrder: true,
                totalNumber: 0,
                thumbnail: "",
                images: [],

            }} /> : ""}
                    </div>
                </Col>
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