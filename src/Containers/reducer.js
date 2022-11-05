import { GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS, GET_IMAGES_FAIL } from "./actionTypes";

const initialState = {
  images: [],
  loading: false
};

const imagesReducer = (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case  GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case  GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading:false
      };
      case  GET_IMAGES_FAIL:
        return {
          ...state,
          images: action.error,
          loading:false
        };
    default:
      return state;
  }
};

export default imagesReducer