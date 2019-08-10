import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'

class IdList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        possibleOptions: []
      }
  }

  optionTypes() {
    switch(this.props.field){
      case "kindId":
        return this.props.kinds
      case "mainId":
        return this.props.symbols
      case "connectedId":
        return this.props.symbols
      case "originalPantheonId":
        return this.props.pantheons
      default:
        return this.props.pantheons
    }
  }

  handleTextChange = (e) => {
    const searchTerm = e.target.value
    if(searchTerm === "") {
        this.setState({possibleOptions: [] })
    } else{
      this.setState({possibleOptions: this.optionTypes().filter(item => item.name.indexOf(searchTerm) >= 0) })
    }
  }

  handleSelectionChange = (e) => {
    const pair = e.target.value.split('-')
    const field = pair[0]
    const id = pair[1]
    const item = this.props.item
    const array = item[field]
    this.props.handleChange(field, id)
  }

  render() {
    const {field, value, item} = this.props


    return <div>
    <Form.Group>
        <Form.Label>{ field.replace("Ids", "").replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) }</Form.Label>


          <div>



            { value !== "" ? this.optionTypes().filter(obj => obj.id === value)[0].name : "Select" }


              <Form.Control
                onChange={this.handleTextChange}
                type='text'
                />

              <Form.Control as="select" onChange={this.handleSelectionChange}>
                <option value="-1">-please select-</option>
                {this.state.possibleOptions.map(option => <option key={option.id} value={ `${field}-${option.id}` } >{option.name}</option>)}
              </Form.Control>
        </div>



    </Form.Group>
    </div>
  }

}

const mapStateToProps = (state) => {
  return {
    symbols: state.symbols,
    connections: state.connections,
    kinds: state.kinds,
    pantheons: state.pantheons,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(IdList)
