import React from 'react';

//import  from '../components/symbol/symbolsComponent'
import Symbols, {defaultSymbolValues} from '../components/symbol/symbolsComponent'
import SymbolForm from '../components/symbol/symbolForm'

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
