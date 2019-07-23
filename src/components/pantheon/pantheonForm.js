import React from 'react'
import {Form, Button} from 'react-bootstrap'

class PantheonForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pantheon: props.pantheon
        }
    }

    handleChange = (e) => {
        this.setState({ 
            pantheon: {
                ...this.state.pantheon,    
                [e.target.name]: e.target.value
            }
        })
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

        console.log(this.state.pantheon)
        
    }

    render() {
        return <div>
            <h5>{this.state.pantheon.name ? "Edit" : "New" }  Pantheon</h5>

            <Form onSubmit={this.submitForm}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="name" type="text" placeholder="Name"
                        value={this.state.pantheon.name} />
                    <Form.Text>
                        The unique name of the symbol/object/item.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="description" type="text" placeholder="Description"
                        value={this.state.pantheon.description} />
                    <Form.Text>
                        A description.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Start Year</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="startYear" type="number" placeholder="Start Year"
                        value={this.state.pantheon.startYear} />
                    <Form.Text>
                        The year we first have record of the group.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>End Year</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="endYear" type="number" placeholder="End Year"
                        value={this.state.pantheon.endYear} />
                    <Form.Text>
                        The year we first have record of the group.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="thumbnail" type="text" placeholder="thumbnail"
                        value={this.state.pantheon.thumbnail} />
                    <Form.Text>
                        A clear picture that gets show at small resolutions.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Images</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="images" type="text" placeholder="Images" 
                        value={this.state.pantheon.images.join(";")} />
                    <Form.Text>
                        Links to images, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>History</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="history" type="text" placeholder="history" 
                        value={this.state.pantheon.history.join(";")} />
                    <Form.Text>
                        Links to images, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>historyInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="historyInfo" type="text" placeholder="historyInfo"
                        value={this.state.pantheon.historyInfo} />
                    <Form.Text>
                        A clear picture that gets show at small resolutions.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>cultureInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="cultureInfo" type="text" placeholder="cultureInfo"
                        value={this.state.pantheon.cultureInfo} />
                    <Form.Text>
                        A clear picture that gets show at small resolutions.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>overviewInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="overviewInfo" type="text" placeholder="overviewInfo"
                        value={this.state.pantheon.overviewInfo} />
                    <Form.Text>
                        A clear picture that gets show at small resolutions.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    }
}
 
export default PantheonForm