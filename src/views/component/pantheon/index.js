import React from 'react';

import Pantheons from '../../../components/pantheon/index/index'
import FormInsert from '../../../components/forms/insert'
import {defaultPantheon} from '../../../db/defaultObjects'

class Pantheon extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showPantheonForm: false
    }
  }


  togglePantheonForm = () => {
    this.setState({showPantheonForm: !this.state.showPantheonForm})
  }

  render() {
  return (
    <div className="">
      <h1>Pantheons</h1>
      <h4>List of All Relgions & Groups</h4>
      <Pantheons />
      <FormInsert item={defaultPantheon} formClass={"pantheons"} />

    </div>
  );

  }
}

export default Pantheon;
