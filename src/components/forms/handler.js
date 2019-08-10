import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addItem, updateItem, deleteItem} from '../../redux/actions'
import { withRouter } from "react-router-dom";


import ArrayField from './fieldTypes/array'
import IdListField from './fieldTypes/idList'
import IdSelectField from './fieldTypes/idSelect'
import ExtraInfoDefaultField from './fieldTypes/extraInfo'

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

  handleChangeCb = (field, value) => {
      this.setState({
          item: {
              ...this.state.item,
              [field]: value
          }
      })
  }

  handleArrayChange = (field, array) => {
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

  handleExtraInfoChange = (fieldsObject) => {
    this.setState({
        item: {
            ...this.state.item,
            extraInfoDefault: fieldsObject
        }
    })
  }

  submitForm = (e) => {
    //e.preventDefault();
      this.state.existing ?
          this.props.updateItem(this.state.item, this.state.formClass) :
          this.props.addItem(this.state.item, this.state.formClass)
  }

  deleteItem = (e) => {
    e.preventDefault()
    if(window.confirm("Are you sure you wish to completely delete the item?")){
      this.props.deleteItem(this.state.item, this.state.formClass)
      this.props.history.push(`/${this.state.formClass}`)
    }
  }

  render() {
    return <Form onSubmit={this.submitForm}>
      { this.state.existing ? "Edit" : "Add"}
      { Object.entries(this.state.item).map(itemField => <div key={itemField[0]}>



                {
                  typeof itemField[1] === 'string' &&  itemField[0].indexOf("Id") <= 0 && itemField[0] !== 'id' && itemField[0].indexOf('Text') === -1  ?
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
                    <Form.Control as="textarea" rows={5} onChange={this.handleChange} type="text"
                      name={ itemField[0] } placeholder={ itemField[0] }
                      value={this.state.item[ itemField[0] ]} />
                  </Form.Group>
                  : ""
                }

                {
                  !Array.isArray(itemField[1]) && itemField[0].indexOf("Id") > 0 ?
                  <IdSelectField item={this.state.item} field={itemField[0]} value={itemField[1]} handleChange={this.handleChangeCb}/>
                  : ""
                }

                {
                  Array.isArray(itemField[1]) && itemField[0].indexOf("Id") > 0 ?
                  <IdListField item={this.state.item} field={itemField[0]} array={itemField[1]} handleArrayChange={this.handleArrayChange}/>
                  : ""
                }

                {
                  Array.isArray(itemField[1]) && itemField[0].indexOf("Id") <= 0 ?
                  <ArrayField item={this.state.item} field={itemField[0]} array={itemField[1]} handleArrayChange={this.handleArrayChange}/>
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

                {
                  itemField[0] === 'extraInfoDefault' ?
                    <span>
                      {JSON.stringify(itemField[1])}
                      <ExtraInfoDefaultField item={this.state.item} fieldsObject={itemField[1]} handleExtraInfoChange={this.handleExtraInfoChange} />
                    </span>
                : ""
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormHandler))
