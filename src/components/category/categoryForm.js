import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addItem, updateItem} from '../../redux/actions'

class CategoryForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: props.category,
            existing: props.category.name != ""
        }
    }

    handleChange = (e) => {
        switch(e.target.name) {
            case "specificOrder":
                this.setState({
                    category: {
                        ...this.state.category,
                        [e.target.name]: e.target.checked
                    }
                })
                break;

            default:
                this.setState({
                    category: {
                        ...this.state.category,
                        [e.target.name]: e.target.value
                    }
                })
                break;
        }
    }
    handleArrayChange = (e) => {
        this.setState({ 
            symbol: {
                ...this.state.symbol,    
                [e.target.name]: e.target.value.split(';')
            }
        })
    }
 
    submitForm = (e) => {
         //e.preventDefault();
         this.state.existing ? 
             this.props.updateItem(this.state.category, "categories") : 
             this.props.addItem(this.state.category, "categories")    
    }
 
    render() {
        return <div>
            <h5>Basic Information</h5>
            <Form onSubmit={this.submitForm}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="name" type="text" placeholder="Name"
                        value={this.state.category.name} />
                    <Form.Text>
                        The unique name of the symbol/object/item.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="description" type="text" placeholder="Description"
                        value={this.state.category.description} />
                    <Form.Text>
                        A description.
                    </Form.Text>
                </Form.Group>

                <h5>Article Information</h5>
                <Form.Group>
                    <Form.Label>overviewText</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="overviewText" type="text" placeholder="overviewText"
                        value={this.state.category.overviewText} />
                    <Form.Text>
                        A decent overview of the category.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>sourceText</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="sourceText" type="text" placeholder="sourceText"
                        value={this.state.category.sourceText} />
                    <Form.Text>
                        Where to go & how to start.
                    </Form.Text>
                </Form.Group>

                <h5>Included Kinds</h5>
                <Form.Group>
                    <Form.Label>Kinds</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="kinds" type="text" placeholder="kinds" 
                        value={this.state.category.kinds.join(";")} />
                    <Form.Text>
                        Collections include in the category, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>




                <Button variant="primary" type="submit">
                    Submit
                </Button>

                </Form>
                
        </div>
    }
}

const mapDispatchToProps = {
    addItem,
    updateItem
}

export default connect(null, mapDispatchToProps)(CategoryForm)