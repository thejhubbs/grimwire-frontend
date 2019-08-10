import { UPDATE_ITEM, ADD_ITEM, DELETE_ITEM } from "./actions";


 const initialState = {
    symbols: JSON.parse(localStorage.getItem('symbols')),
    kinds: JSON.parse(localStorage.getItem('kinds')),
    pantheons: JSON.parse(localStorage.getItem('pantheons')),
    connections: JSON.parse(localStorage.getItem('connections')),
    users: JSON.parse(localStorage.getItem('users')),
    categories: JSON.parse(localStorage.getItem('categories')),
    loggedIn: true,
    userId: 1
  }


/*  const initialState = {
     symbols: {},
     kinds: {},
     pantheons: {},
     connections: {},
     users: {},
     categories: {}
   }
*/


export default function reducer(state = initialState, action) {
    const user = state.userId
    var id, type, group, index, before, after, logItem
    const log = localStorage.getItem('log') ? JSON.parse(localStorage.getItem('log')) : []


    switch(action.type) {
        case UPDATE_ITEM:
             id = action.payload.data.id
             type = action.payload.nameOfClass
             group = state[type]
             index = group.findIndex((obj => obj.id === id));
             before = group[index]
             group[index] = action.payload.data
             localStorage.setItem(type, JSON.stringify(group))

             log.push( { user: user, action: action.type, before: before, after: action.payload.data } )
             localStorage.setItem('log', JSON.stringify( log ))


             return { ...state, group }
        case ADD_ITEM:
             type = action.payload.nameOfClass
             group = state[type]
             var highestID = 0
             group.forEach(item => parseInt(item.id) > highestID ? highestID = parseInt(item.id) : "" )

             group.push( {...action.payload.data, id: (highestID + 1).toString() } )

             localStorage.setItem(type, JSON.stringify(group))

             log.push( { user: user, action: action.type, before: "", after: action.payload.data } )
             localStorage.setItem('log', JSON.stringify( log ))
             return { ...state, group }

        case DELETE_ITEM:
             id= action.payload.data.id
             type = action.payload.nameOfClass
             group = state[type]
             group = group.filter(item => item.id !== id)
             console.log(group)
             localStorage.setItem(type, JSON.stringify(group))

                          log.push( { user: user, action: action.type, before: action.payload.data, after: "" } )
                          localStorage.setItem('log', JSON.stringify( log ))

             return {...state, group}
        default:
            return state
    }
  }
