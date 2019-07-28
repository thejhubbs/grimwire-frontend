import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <Row>
            {
                this.props.categories.map(category => <Col key={category.name} lg={3}>
                    <br />
                    <h5><Link to={`/category/${category.id}`}>{category.name}</Link></h5>
                    {category.description}<br />
                  {this.props.kinds.filter(item => category.kindIds.indexOf(item.id) >= 0).map(kind => <div key={kind.id}>
                            -<Link  to={`/collection/${kind.id}`}>{kind.name}</Link><br />
                        </div>)}
                        <br />
                </Col>)
            }
        </Row>
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        kinds: state.kinds
    }
}

export default connect(mapStateToProps)(CategoriesComponent)
