import React from 'react'
import SmallKindCard from '../cards/small'

function SimpleKindList(props) {
    const style = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return <div style={style}>
        { props.kinds.map(item => 
            <SmallKindCard key={item.name} kind={item} />
        )}
    </div>
}

export default SimpleKindList
