import React from 'react'

class DisplayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      showForm: false,
      form: props.form
    }
  }

  toggleForm = (e) => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const item = this.props.item
    const Form = this.props.form

    return <div>
      <button onClick={this.toggleForm}>
        { item.name ? `Edit ${item.name}` : `New` } ({this.state.showForm ? "-" : "+"})
      </button>
      <div className="theForm">
          {this.state.showForm ? <Form key={item.name} item={item} /> : ""}
      </div>
    </div>
  }
}

export default DisplayForm
