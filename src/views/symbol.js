import React from 'react';

//import  from '../components/symbol/symbolsComponent'
import Symbols, {defaultSymbolValues} from '../components/symbol/symbolsComponent'
import SymbolForm from '../components/symbol/symbolForm'

class Symbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSymbolForm:false
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

        <button onClick={this.toggleSymbolForm}>Edit Symbol</button>
          <div className="theForm">
          { this.state.showSymbolForm ? <SymbolForm symbol={defaultSymbolValues}/> : "" }
        </div>

      </div>
  }
}

export default Symbol;
