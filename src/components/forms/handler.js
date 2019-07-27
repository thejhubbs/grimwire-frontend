import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addItem, updateItem} from '../../redux/actions'

class FormHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      formClass: props.formClass,
      existing: props.item.name != null
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
      this.setState({
          item: {
              ...this.state.item,
              [e.target.name]: e.target.value.split(';')
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
      console.log("Submit", this.state)
      this.state.existing ?
          this.props.updateItem(this.state.item, this.state.formClass) :
          this.props.addItem(this.state.item, this.state.formClass)

  }

  render() {
    return <Form onSubmit={this.submitForm}>
      { this.state.existing ? "Edit" : "Add"}
      { Object.entries(this.state.item).map(itemField => <div key={itemField[0]}>

                {
                  typeof itemField[1] === 'string' ?
                          <Form.Group>
                    <Form.Label>{ itemField[0] }</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text"
                    name={ itemField[0] } placeholder={ itemField[0] }
                    value={this.state.item[ itemField[0] ]} />
                    </Form.Group>
                  : ""
                }


                    {
                     Number.isInteger(itemField[1]) ?
                             <Form.Group>
                        <Form.Label>{ itemField[0] }</Form.Label>
                        <Form.Control onChange={this.handleChange} type="number"
                        name={ itemField[0] } placeholder={ itemField[0] }
                        value={this.state.item[ itemField[0] ]} />
                        </Form.Group>
                      : ""
                    }

                {
                  Array.isArray(itemField[1]) ?
                  <Form.Group>
                      <Form.Label>{ itemField[0] }</Form.Label>
                      <Form.Control onChange={this.handleArrayChange} type="text"
                      name={ itemField[0] } placeholder={ itemField[0] }
                      value={this.state.item[ itemField[0] ].join(';')} />
                      </Form.Group>
                  : ""
                }

                {
                  itemField[0] === 'info' ?
                    this.state.item.info ?
                     <div>
                      <h5>Collection Related Information</h5>
                      { Object.entries(this.state.item.info).map(i => <Form.Group key={i[0]}>
                          <Form.Label>{i[0]}</Form.Label>
                          <Form.Control
                              onChange={this.handleInfoChange}
                              name={i[0]} type="text" placeholder={i[0]}
                              value={i[1]} />
                      </Form.Group>) } </div>
                  : "" : ""

                }



      </div>) }


    <button type='submit'>Okie</button>


    </Form>
  }


}

const mapDispatchToProps = {
    addItem,
    updateItem
}

export default connect(null, mapDispatchToProps)(FormHandler)
