import React from 'react'
import {Link} from 'react-router-dom';


function SmallPantheonCard(props) {
    const item = props.pantheon
    const style = {
        width: '90px'
    }
    return <div style={style}>
            <h2>{ item.thumbnail ? <img src={item.thumbnail} height="50px" alt={item.name} /> : item.name[0]}</h2>
            <Link to={`/pantheon/${item.id}`}>{ item.name }</Link><br />
    </div>
}

export default SmallPantheonCard
