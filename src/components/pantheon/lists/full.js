import React from 'react'
import ListItemPantheonCard from '../cards/listItem'

function SimplePantheonList(props) {
    const style = {
    }

    //Ideally should be scrolling and have images of the Thing
    return <div style={style}>

        <hr />
        { props.pantheons.map(item =>
            <div><ListItemPantheonCard key={item.pantheon_name} pantheon={item} /><hr /></div>
        )}
    </div>
}

export default SimplePantheonList
