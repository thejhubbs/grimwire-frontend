import React from 'react'
import {Form, Button} from 'react-bootstrap'

class KindForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            kind: props.kind
        }
    }
 
    handleChange = (e) => {
        switch(e.target.name) {
            case "specificOrder":
                this.setState({
                    kind: {
                        ...this.state.kind,
                        [e.target.name]: e.target.checked
                    }
                })
                break;

            default:
                this.setState({
                    kind: {
                        ...this.state.kind,
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
         e.preventDefault();
         console.log(this.state.kind)   
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
                        value={this.state.kind.name} />
                    <Form.Text>
                        The unique name of the symbol/object/item.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="description" type="text" placeholder="Description"
                        value={this.state.kind.description} />
                    <Form.Text>
                        A description.
                    </Form.Text>
                </Form.Group>
                Has a Specific Order? <input 
                    type="checkBox"
                    name="specificOrder"
                    checked={this.state.kind.specificOrder}
                    onChange={this.handleChange} /><br />
                    <br />

                <Form.Group>
                    <Form.Label>Total Number</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="number" type="text" placeholder="Number"
                        value={this.state.kind.number} />
                    <Form.Text>
                        How many in the complete list
                    </Form.Text>
                </Form.Group>

                <h5>Information</h5>
                <Form.Group>
                    <Form.Label>Theory & Application</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="theoryInfo" type="text" placeholder="Theory"
                        value={this.state.kind.theoryInfo} />
                    <Form.Text>
                        What you're supposed to do with them, what they are.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>History & Background</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="historyInfo" type="text" placeholder="History"
                        value={this.state.kind.historyInfo} />
                    <Form.Text>
                        Where they came from & other information about them.
                    </Form.Text>
                </Form.Group>

                <h5>Pictures</h5>
                <Form.Group>
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="thumbnail" type="text" placeholder="Thumbnail"
                        value={this.state.kind.thumbnail} />
                    <Form.Text>
                        A small image shown at small resolutions
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Images</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="images" type="text" placeholder="Images" 
                        value={this.state.kind.images.join(";")} />
                    <Form.Text>
                        Images that apply
                    </Form.Text>
                </Form.Group>

                <h5>Pantheons</h5>
                <Form.Group>
                    <Form.Label>Created By</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="originalPantheon" type="text" placeholder="Created By"
                        value={this.state.kind.originalPantheon} />
                    <Form.Text>
                        The pantheon that created/came up with collection.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Used By Pantheons</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="featuredPantheons" type="text" placeholder="Relevant Pantheons" 
                        value={this.state.kind.featuredPantheons.join(";")} />
                    <Form.Text>
                        Important and relevant pantheons, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>

                </Form>
                
        </div>
    }
}

export default KindForm