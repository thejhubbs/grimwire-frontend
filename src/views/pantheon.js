import React from 'react';
import Pantheons from '../components/pantheon/pantheonsComponent'
import PantheonForm from '../components/pantheon/pantheonForm'

class Pantheon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPantheonForm:false
    }
  }

  togglePantheonForm = () => {
    this.setState({showPantheonForm: !this.state.showPantheonForm})
  } 

  render() {
  return (
    <div className="">
      <h1>Pantheons</h1>
      <p>A religion or group of gods</p>
      <br /><hr /><br />
      <Pantheons />

      <button onClick={this.togglePantheonForm}>New Pantheon/Religion/Group</button>
          <div className="theForm">
          { this.state.showPantheonForm ?  <PantheonForm pantheon={{
                name: "",
                description: "",
                startYear: 0,
                endYear: 0,
                images: [],
                thumbnail: "",
                overviewInfo: "",
                historyInfo: "",
                cultureInfo: "",
                history: []
            }}/> : "" }
        </div>


     
    </div>
  );  
}
}

export default Pantheon;
