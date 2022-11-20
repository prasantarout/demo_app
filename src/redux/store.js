import {configureStore, combineReducers} from "@reduxjs/toolkit";


import reducer from './reducerContent'
// const middlewares = [thunk]

const store = configureStore({reducer})

export default store