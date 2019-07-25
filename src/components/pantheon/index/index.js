import React from 'react';
import {connect} from 'react-redux';
import SimplePantheonList from '../lists/simple';

//This component is used to build a 'complete' list, used for calling searches and passing props to the actual list component.

class Pantheons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <SimplePantheonList pantheons={this.props.pantheons} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
      pantheons: state.pantheons
    }
  }

export default connect(mapStateToProps)(Pantheons);