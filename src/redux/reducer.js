import { UPDATE_ITEM, ADD_ITEM, DELETE_ITEM } from "./actions";

const initialState = {
    symbols: JSON.parse(localStorage.getItem('symbols')),
    kinds: JSON.parse(localStorage.getItem('kinds')),
    pantheons: JSON.parse(localStorage.getItem('pantheons')),
    connections: JSON.parse(localStorage.getItem('connections')),
    users: JSON.parse(localStorage.getItem('users')),
    categories: JSON.parse(localStorage.getItem('categories'))
  }


export default function reducer(state = initialState, action) {
    var name, type, group, index
    switch(action.type) {
        case UPDATE_ITEM:
             name = action.payload.data.name
             type = action.payload.nameOfClass
             group = state[type]
             index = group.findIndex((obj => obj.name === name));
             group[index] = action.payload.data
             localStorage.setItem(type, JSON.stringify(group))
             return { ...state, group }
        case ADD_ITEM:
             name = action.payload.data.name
             type = action.payload.nameOfClass
             group = state[type]
             group.push(action.payload.data)
             localStorage.setItem(type, JSON.stringify(group))
             return { ...state, group }
        case DELETE_ITEM:
             name= action.payload.data.name
             type = action.payload.nameOfClass
             group = state[type]
             group = group.filter(item => item.name !== name)
             console.log(group)
             localStorage.setItem(type, JSON.stringify(group))
             return {...state, group}
        default:
            return state
    }
  }
