import React from 'react';
import axios from 'axios';
import SimpleSymbolList from '../lists/simple';
import {Form} from 'react-bootstrap'

class Symbols extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: []
        }
    }

    componentDidMount = () => {
      axios
          .get('http://localhost:4001/api/symbols')
          .then(res =>
            this.setState({symbols: res.data})
          )
          .catch(err => console.log(err) );
    }

    render() {
        return <div>
            Sort by: <button>Alpha</button> <button>Year</button> <input type='text' /> <button>Search</button>
            <SimpleSymbolList symbols={this.state.symbols} />
        </div>
    }


}

export default Symbols;
