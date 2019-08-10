import React from 'react'
import SmallPantheonCard from '../cards/small'

function SimplePantheonList(props) {
    const style = {
        display: "flex",
        justifyContent: 'center',
        overflow: "hidden"
    }

    //Ideally should be scrolling and have images of the Thing
    return <div>
      <h3>Popular</h3>
      <div style={style}>
          { props.pantheons.splice(1, 12).map(item =>
              <SmallPantheonCard key={item.name} pantheon={item} />
          )}
      </div>
    </div>
}

export default SimplePantheonList
