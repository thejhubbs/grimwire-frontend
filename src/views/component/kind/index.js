import React from 'react';

import Kinds from '../../../components/kind/index/index'
import FormInsert from '../../../components/forms/insert'
import {defaultKind} from '../../../db/defaultObjects'

class Kind extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showKindForm: false
    }
  }


  toggleKindForm = () => {
    this.setState({showKindForm: !this.state.showKindForm})
  }

  render() {
  return (
    <div className="">
      <h1>Kinds</h1>
      <h4>List of All Kinds & Items</h4>
      <Kinds />
      <FormInsert item={defaultKind} formClass={"kinds"} />

    </div>
  );

  }
}

export default Kind;
