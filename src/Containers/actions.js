import axios from "axios";
import {  GET_IMAGES_REQUEST , GET_IMAGES_SUCCESS , GET_IMAGES_FAIL } from "./actionTypes";

export const listImages = () => async dispatch => {
    console.log("here")
    try {
      dispatch({ type: GET_IMAGES_REQUEST })
      const { data } = await  axios.get('./data.json')
      dispatch({
        type: GET_IMAGES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: GET_IMAGES_FAIL,
        payload: error
      })
    }
  }