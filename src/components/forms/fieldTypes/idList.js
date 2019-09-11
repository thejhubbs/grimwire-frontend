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
      case "pantheonIds":
        return this.props.pantheons
      case "historyIds":
        return this.props.pantheons
      case "featuredPantheonIds":
        return this.props.pantheons
      case "prerequisiteIds":
        return this.props.categories
      case "kindIds":
        return this.props.kinds
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
    array.push(id)
    this.props.handleArrayChange(field, array)
  }

  deleteListItem = (e) => {
    e.preventDefault();
    const pair = e.target.id.split('-')
    const field = pair[0]
    const index = pair[1]
    const item = this.props.item
    const array = item[field]
    array.splice(index, 1)
    this.props.handleArrayChange(field, array)
  }

  render() {
    const {field, array, item} = this.props


    return <div>
    <Form.Group>
        <Form.Label>{ field.replace("Ids", "").replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) }</Form.Label>


          <div>

            {item[ field ].map( (item, index) => <div key={index}>

            { this.optionTypes().filter(pantheon => pantheon.id === item)[0].name }
            <button onClick={this.deleteListItem} id={`${field}-${index}`}>-</button>

            </div> )}

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
