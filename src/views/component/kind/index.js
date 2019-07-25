import React from 'react';

import Kinds from '../../../components/kind/index/index'
import KindForm from '../../../components/kind/misc/form';

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
      <h1>Collections & Items</h1>
      <h4>View All Collections</h4>
      <Kinds /> 
      <button onClick={this.toggleKindForm}>New Kind/Collection/Category</button>
          <div className="theForm">
          { this.state.showKindForm ? <KindForm kind={{
                name: "",
                description: "",
                originalPantheon: "",
                featuredPantheons: [],
                specificOrder: true,
                totalNumber: 0
            }}/> : "" }
        </div>

      
    </div>
  );

  }
}

export default Kind;
