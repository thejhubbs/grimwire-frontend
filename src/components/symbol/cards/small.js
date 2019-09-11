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
            <Link to={`/symbol/${item.symbol_id}`}>{ item.symbol_name }</Link><br />
            {item.symbol_description}
    </div>
}

export default SmallPantheonCard
