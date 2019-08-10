import React from 'react'
import ListItemPantheonCard from '../cards/listItem'

function SimplePantheonList(props) {
    const style = {
    }

    //Ideally should be scrolling and have images of the Thing
    return <div style={style}>
        { props.pantheons.map(item =>
            <ListItemPantheonCard key={item.name} pantheon={item} />
        )}
    </div>
}

export default SimplePantheonList
