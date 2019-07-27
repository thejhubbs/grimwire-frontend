import React from 'react';
import {connect} from 'react-redux'
import SimpleKindList from '../lists/simple';

class Kinds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
        return <div>
            <SimpleKindList kinds={this.props.kinds} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
      kinds: state.kinds
    }
  }

export default connect(mapStateToProps)(Kinds);