import React from 'react'
import {Link} from 'react-router-dom';


function SmallPantheonCard(props) {
    const item = props.pantheon
    const style = {
      display: 'flex',
      alignItems: 'center'
    }
    return <div style={style}>
            <h2>{ item.thumbnail ? <img src={item.thumbnail} height="50px" alt={item.name} /> : item.name[0]}</h2>
            <Link to={`/pantheon/${item.id}`}>{ item.name }</Link><br />
            <span style={{padding:'5px'}}>{item.description}</span>
            <span style={{padding:'5px'}}>{item.startYear < 0 ? item.startYear*-1 + "BC" : item.startYear + "AD" }</span>
    </div>
}

export default SmallPantheonCard
