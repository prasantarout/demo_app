import types from "../types"

let init_state = {
    get:''
}

export default function (state = init_state, action) {
    switch (action.type) {
        case types.GET: {
           let data = action.payload
           console.log("get data",data)
            return { ...state, get: data }
        }
        case types.EDIT: {
            let data = action.payload
            return { ...state, get:data}
        }
        default:
            return {...state}
    }
}