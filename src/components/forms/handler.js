  import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addItem, updateItem, deleteItem} from '../../redux/actions'

class FormHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      formClass: props.formClass,
      existing: props.item.id ? true : false
    }
  }

  handleChange = (e) => {
      this.setState({
          item: {
              ...this.state.item,
              [e.target.name]: e.target.value
          }
      })
  }

  handleArrayChange = (e) => {
    const set = e.target.name.split('-')
    const field = set[0]
    const index = set[1]
    const value = e.target.value
    const array = this.state.item[field]
    if(value === "") {
      array.splice(index, 1)
    } else if(value.indexOf(';') > -1) {
      array[index] = value.split(';')[0]
      array[array.length] = ""
    } else{
      array[index] = value
    }
      this.setState({
          item: {
              ...this.state.item,
              [field]: array
          }
      })
  }

  handleInfoChange = (e) => {
      this.setState({
          item: {
              ...this.state.item,
              info: {
                  ...this.state.item.info,
                  [e.target.name]: e.target.value
              }
          }
      })
  }


  submitForm = (e) => {
    e.preventDefault();
      this.state.existing ?
          this.props.updateItem(this.state.item, this.state.formClass) :
          this.props.addItem(this.state.item, this.state.formClass)
  }

  deleteItem = (e) => {
    e.preventDefault()
    if(window.confirm("Are you sure you wish to completely delete the item?")){
      this.props.deleteItem(this.state.item, this.state.formClass)
    }
  }

  render() {
    return <Form onSubmit={this.submitForm}>
      { this.state.existing ? "Edit" : "Add"}
      { Object.entries(this.state.item).map(itemField => <div key={itemField[0]}>



                {
                  typeof itemField[1] === 'string' && itemField[0] !== 'id' && itemField[0].indexOf('Text') === -1  ?
                          <Form.Group>
                    <Form.Label>{ itemField[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) }</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text"
                    name={ itemField[0] } placeholder={ itemField[0] }
                    value={this.state.item[ itemField[0] ]} />
                    </Form.Group>
                  : ""
                }

                {
                  itemField[0].indexOf('Text') >= 0 ?
                  <Form.Group>
                    <Form.Label>{ itemField[0].replace('Text', '').replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) }</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text"
                      name={ itemField[0] } placeholder={ itemField[0] }
                      value={this.state.item[ itemField[0] ]} />
                  </Form.Group>
                  : ""
                }

                {
                  Array.isArray(itemField[1]) ?
                  <Form.Group>
                      <Form.Label>{ itemField[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) }</Form.Label>

                      { this.state.item[itemField[0]].length > 0 ? this.state.item[ itemField[0] ].map( (item, index) => <span key={index}>
                        <Form.Control onChange={this.handleArrayChange} type='text' value={item} name={`${itemField[0]}-${index}`} />
                        </span> ) : <Form.Control onChange={this.handleArrayChange} type='text' name={`${itemField[0]}-${0}`} />}

                      </Form.Group>
                  : ""
                }

                {
                  itemField[0] === 'info' ?
                    this.state.item.info ?
                     <div>
                      <h5>Collection Related Information</h5>
                      { Object.entries(this.state.item.info).map(i => <Form.Group key={i[0]}>
                          <Form.Label>{i[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</Form.Label>
                          <Form.Control
                              onChange={this.handleInfoChange}
                              name={i[0]} type="text" placeholder={i[0]}
                              value={i[1]} />
                      </Form.Group>) } </div>
                  : "" : ""

                }



      </div>) }


    <button type='submit'>Okie</button>
    <button onClick={this.deleteItem}>Delete</button>

    </Form>
  }


}

const mapDispatchToProps = {
    addItem,
    updateItem,
    deleteItem
}

const mapStateToProps = (state) => { return {
  symbols: state.symbols,
  connections: state.connections,
  kinds: state.kinds,
  pantheons: state.pantheons,
  categories: state.categories
}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHandler)
