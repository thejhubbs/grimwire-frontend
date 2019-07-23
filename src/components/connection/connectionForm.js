import React from 'react'
import {Form, Button} from 'react-bootstrap'

class ConnectionForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            connection: this.props.connection
        }
    }

    handleChange = (e) => {
        this.setState({ 
            connection: {
                ...this.state.connection,    
                [e.target.name]: e.target.value
            }
        }) 
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.connection)
        
    }

    render() {
        return <div>
            <h5>{this.state.connection.name ? "Edit" : "New" }  Connection</h5>

            <Form onSubmit={this.submitForm}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="main" type="text" placeholder="Main"
                        value={this.state.connection.main} />
                    <Form.Text>
                        The name of the object this attribution appears on. For serveral reasons such as serverity and respect, it may not always be as stong or necessary to list both ways.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Connected</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="connected" type="text" placeholder="connected"
                        value={this.state.connection.connected} />
                    <Form.Text>
                        The name of the connected.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="description" type="text" placeholder="description"
                        value={this.state.connection.description} />
                    <Form.Text>
                        A description of the relationship.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Relationship Type</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="relationship" type="number" placeholder="relationship"
                        value={this.state.connection.relationship} />
                    <Form.Text>
                        5 = Variations- as Mercury to Hermes; 4 = Properties- as Mercury to Communication; 3 = symbols/associations- as Mercury to the element Air; 2 = family & relationships as Mercury and Zues; 1 = loose associated category
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Number</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="strength" type="number" placeholder="strength"
                        value={this.state.connection.strength} />
                    <Form.Text>
                        On a scale of 1-10, how accurate & widespread the connection is.
                    </Form.Text>
                </Form.Group> 
                <Form.Group>
                    <Form.Label>About Info</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="aboutInfo" type="text" placeholder="aboutInfo"
                        value={this.state.connection.aboutInfo} />
                    <Form.Text>
                        A long detailed analysis of the relationship.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>User</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="userCreated" type="text" placeholder="userCreated"
                        value={this.state.connection.userCreated} />
                    <Form.Text>
                        The user that attributed this connection.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Source</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="source" type="text" placeholder="source"
                        value={this.state.connection.source} />
                    <Form.Text>
                        Where you saw this attribution.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    }
}

export default ConnectionForm