import React from 'react';

import Symbols from '../../../components/symbol/index/index'

class Symbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div  className="tpBlackBg">
        <h1>Search</h1>
        <p>Look for Info</p>
        <Symbols />

      </div>
  }
}

export default Symbol;
