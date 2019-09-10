import React from 'react';
import FullPantheonsList from '../lists/full';
import axios from 'axios';

//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class Pantheons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pantheons: []
        }
    }

    componentDidMount = () => {
      axios
          .get('http://localhost:4001/api/pantheons')
          .then(res =>
            this.setState({pantheons: res.data})
          )
          .catch(err => console.log(err) );
    }
 
    render() {
        return <div className="container">
            Sort by: <button>Alpha</button> <button>Year</button> <input type='text' /> <button>Search</button>
          <FullPantheonsList pantheons={this.state.pantheons} />
        </div>
    }
}


export default Pantheons;
