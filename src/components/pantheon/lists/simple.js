import React from 'react'
import SmallPantheonCard from '../cards/small'

function SimplePantheonList(props) {
    const style = {
        display: "flex",
        flexWrap: '',
        justifyContent: 'center',
        overflowX: 'scroll'
    }

    //Ideally should be scrolling and have images of the Thing
    return <div style={style}>
        { props.pantheons.map(item =>
            <SmallPantheonCard key={item.name} pantheon={item} />
        )}
    </div>
}

export default SimplePantheonList
