import { configureStore } from "@reduxjs/toolkit"
import imagesReducer  from "./Containers/reducer";
import { combineReducers } from 'redux'
const reducer = combineReducers({
    imagesReducer
})

const store = configureStore({
    reducer
  })

export default store