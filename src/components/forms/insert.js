import React from 'react'
import DisplayForm from './display'
import HandleForm from './handler'
import {connect} from 'react-redux'

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
    return this.props.loggedIn ? <DisplayForm item={this.state.item}>
      <HandleForm item={this.state.item} formClass={this.state.formClass} />
    </DisplayForm> : "" 
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn, userId: state.userId
  }
}

export default connect(mapStateToProps)(InsertForm)
