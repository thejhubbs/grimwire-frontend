import React from 'react';
import {connect} from 'react-redux';
import FullPantheonsList from '../lists/full';

//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class Pantheons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div className="container">
            Sort by: <button>Alpha</button> <button>Year</button> <input type='text' /> <button>Search</button>
            <FullPantheonsList pantheons={this.props.pantheons} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
      pantheons: state.pantheons
    }
  }

export default connect(mapStateToProps)(Pantheons);
