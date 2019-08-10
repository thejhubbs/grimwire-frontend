import React from 'react';
import {connect} from 'react-redux'
import FullKindList from '../lists/full';

class Kinds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <FullKindList kinds={this.props.kinds} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
      kinds: state.kinds
    }
  }

export default connect(mapStateToProps)(Kinds);
