import React from 'react';
import axios from 'axios';
import FullKindList from '../lists/full';

class Kinds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          kinds: []
        }
    }

    componentDidMount = () => {
      axios
          .get('http://localhost:4001/api/kinds')
          .then(res =>
            this.setState({kinds: res.data})
          )
          .catch(err => console.log(err) );
    }

    render() {
        return <div>
            Sort by: <button>Alpha</button> <input type='text' /> <button>Search</button>
          <FullKindList kinds={this.state.kinds} />
        </div>
    }
}

export default Kinds;
