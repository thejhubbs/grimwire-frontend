import React from 'react'
import {Form, Button} from 'react-bootstrap'

class SymbolForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            symbol: this.props.symbol
        }
    }

    handleChange = (e) => {
        this.setState({ 
            symbol: {
                ...this.state.symbol,    
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
    handleInfoChange = (e) => {
        this.setState({ 
            symbol: {
                ...this.state.symbol, 
                info: {
                    ...this.state.symbol.info,
                    [e.target.name]: e.target.value
                }   
            }
        })
    }


    submitForm = (e) => {
        e.preventDefault();

        console.log(this.state.symbol)
        
    }

    render() {
        return <div>
            <h5>{this.state.symbol.name ? "Edit" : "New" } Symbol</h5>

            <Form onSubmit={this.submitForm}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="name" type="text" placeholder="Name"
                        value={this.state.symbol.name} />
                    <Form.Text>
                        The unique name of the symbol/object/item.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Collection</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="kind" type="text" placeholder="Kind"
                        value={this.state.symbol.kind} />
                    <Form.Text>
                        The name of the collection/category this belongs to.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="description" type="text" placeholder="Description"
                        value={this.state.symbol.description} />
                    <Form.Text>
                        A description.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Number</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="number" type="number" placeholder="Number"
                        value={this.state.symbol.number} />
                    <Form.Text>
                        If the collection is numbered, the number of the item.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Pantheons</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="pantheons" type="text" placeholder="Relevant Pantheons" 
                        value={this.state.symbol.pantheons.join(";")} />
                    <Form.Text>
                        Important and relevant pantheons, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Variations</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="otherSpellings" type="text" placeholder="Other Spellings" 
                        value={this.state.symbol.otherSpellings.join(";")} />
                    <Form.Text>
                        Other spellings and transliterations, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="thumbnail" type="text" placeholder="thumbnail"
                        value={this.state.symbol.thumbnail} />
                    <Form.Text>
                        A clear picture that gets show at small resolutions.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Images</Form.Label>
                    <Form.Control 
                        onChange={this.handleArrayChange} 
                        name="images" type="text" placeholder="Images" 
                        value={this.state.symbol.images.join(";")} />
                    <Form.Text>
                        Links to images, separated by a semi-colon with no spaces, like;this
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Background</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="backgroundInfo" type="text" placeholder="backgroundInfo"
                        value={this.state.symbol.backgroundInfo} />
                    <Form.Text>
                        Any history, symbology, study, or physical meanings..
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Meaning</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="meaningInfo" type="text" placeholder="meaningInfo"
                        value={this.state.symbol.meaningInfo} />
                    <Form.Text>
                        Interpretations, significance, and application.
                    </Form.Text>
                </Form.Group>

                { this.state.symbol.info ? 
                    Object.entries(this.state.symbol.info).map(item => <Form.Group>
                        <Form.Label>{item[0]}</Form.Label>
                        <Form.Control
                            onChange={this.handleInfoChange}
                            name={item[0]} type="text" placeholder={item[0]}
                            value={item[1]} />
                    </Form.Group>)
            : "" }

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    }
}

export default SymbolForm