import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addItem, updateItem} from '../../../redux/actions'


class PantheonForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pantheon: props.pantheon,
            existing: props.pantheon.name !== ""
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
        //e.preventDefault();
        this.state.existing ? 
            this.props.updateItem(this.state.pantheon, "pantheons") : 
            this.props.addItem(this.state.pantheon, "pantheons")        
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

                <h5>History Information</h5>
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
                    <Form.Label>History</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="history" type="text" placeholder="history" 
                        value={this.state.pantheon.history.join(";")} />
                    <Form.Text>
                        Other pantheons this pantheon comes from, separated by a semicolon, like;this
                    </Form.Text>
                </Form.Group>

                <h5>Pictures</h5>
                <Form.Group>
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="thumbnail" type="text" placeholder="thumbnail"
                        value={this.state.pantheon.thumbnail} />
                    <Form.Text>
                        A clear picture that gets shown at small resolutions.
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
                
                <h5>Article Information</h5>
                <Form.Group>
                    <Form.Label>overviewInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="overviewInfo" type="text" placeholder="overviewInfo"
                        value={this.state.pantheon.overviewInfo} />
                    <Form.Text>
                        An overview- how do we know them?
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>historyInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="historyInfo" type="text" placeholder="historyInfo"
                        value={this.state.pantheon.historyInfo} />
                    <Form.Text>
                        Where did this pantheon come from? What do we need to know about that world/region to understand them?
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>cultureInfo</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="cultureInfo" type="text" placeholder="cultureInfo"
                        value={this.state.pantheon.cultureInfo} />
                    <Form.Text>
                        What did they believe? How was their art, music, sports or fun? any advancements?
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

export default connect(null, mapDispatchToProps)(PantheonForm)