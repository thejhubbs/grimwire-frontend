import React from 'react';

import Pantheon from '../../../components/pantheon/page/page'

class PantheonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <div className="">
        <Pantheon match={this.props.match}  />
      </div>
  }
}

export default PantheonPage;
