import React from 'react'
import DisplayForm from './display'
import HandleForm from './handler'

//Takes in an item (either default-empty-version or a created), and the pluralized name of the class type
class InsertForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      formClass: props.formClass
    }
  }


  render(){
    return <DisplayForm item={this.state.item}>
      <HandleForm item={this.state.item} formClass={this.state.formClass} />
    </DisplayForm>
  }
}

export default InsertForm
