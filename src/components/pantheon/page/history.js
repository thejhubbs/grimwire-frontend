import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


      yearRange = (item) => {
          var startYearString = item.startYear > 0 ? item.startYear + "AD" : item.startYear * -1 + "BC"
          var endYearString = item.endYear > 0 ?
              item.endYear === 2100 ? "Present" : item.endYear + "AD" :
              item.endYear * -1 + "BC"
          return startYearString + " - " + endYearString;
      }

  render() {
    const {item, history, offshoots} = this.props

    return <div>
      <p>{this.yearRange(item)}</p>

            History:
            { history.length > 0 ? this.state.history.map(item => <span key={item.name}>
                <Link to={`/pantheon/${item.name}`}>{item.name}</Link>
            </span>) : "N/a" }<br />

            Offshoots:
            { offshoots.length > 0 ? this.state.offshoots.map(item => <span key={item.name}>
                <Link to={`/pantheon/${item.name}`}>{item.name}</Link>
            </span>) : "N/a"}<br />

    </div>
  }
}

export default BasicInfo
