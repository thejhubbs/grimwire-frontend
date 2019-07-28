import React from 'react'

class DisplayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      showForm: false,
      form: props.children
    }
  }

  toggleForm = (e) => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const item = this.props.item

    return <div>
      <button onClick={this.toggleForm}>
        { item.name || item.connected ? `Edit ${item.name ? item.name : ""}` : `New` } ({this.state.showForm ? "-" : "+"})
      </button>
      <div className="theForm">
          {this.state.showForm ? this.props.children : ""}
      </div>
    </div>
  }
}

export default DisplayForm
