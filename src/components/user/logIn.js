import React from 'react'
import {Form} from 'react-bootstrap'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {
        return <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control />
                    <Form.Text>Please enter.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text>Please enter.</Form.Text>
                </Form.Group>
            </Form>
        </div>
    }
}

export default LogIn