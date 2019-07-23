import React from 'react'
import SmallKindCard from './smallKindCard'

function SimpleKindList(props) {
    const style = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return <div style={style}>
        { props.kinds.map(item => 
            <SmallKindCard kind={item} />
        )}
    </div>
}

export default SimpleKindList
