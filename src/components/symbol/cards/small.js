import React from 'react'
import {Link} from 'react-router-dom';


function SmallPantheonCard(props) {
    const item = props.symbol
    const style = {
        width: '200px',
        height: '200px',
        padding: '5px'
    }
    return <div style={style}>
            <Link to={`/symbol/${item.id}`}>{ item.name }</Link><br />
            {item.kind}<br />
            {item.description}
    </div>
}

export default SmallPantheonCard
