import React from 'react'
import SmallSymbolCard from './smallSymbolCard'

function SimpleSymbolList(props) {
    const style = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return <div style={style}>
        { props.symbols.length > 0 ? props.symbols.map(item => 
            <SmallSymbolCard symbol={item} />
        ) : "There are no results." }
    </div>
}

export default SimpleSymbolList
