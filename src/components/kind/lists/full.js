import React from 'react'
import ListItemKindCard from '../cards/listItem'

function SimpleKindList(props) {
    const style = {
    }

    return <div style={style}>
        { props.kinds.map(item =>
            <ListItemKindCard key={item.name} kind={item} />
        )}
    </div>
}

export default SimpleKindList
