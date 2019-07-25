import React from 'react';

import Symbols from '../../../components/symbol/symbolsComponent'

class Symbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  toggleSymbolForm = () => {
    this.setState({showSymbolForm: !this.state.showSymbolForm})
  } 

  render() {
    return <div className="">
        <h1>Search</h1>
        <p>Look for Info</p>
        <Symbols />

      </div>
  }
}

export default Symbol;
