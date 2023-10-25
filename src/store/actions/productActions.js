import axios from "axios"

export const SET_PRODUCT = "SET_PRODUCT"
export const ADD_COUNT = "ADD_COUNT"
export const REMOVE_COUNT = "REMOVE_COUNT"
export const ADD_PAGECOUNT = "ADD_PAGECOUNT"
export const DELETE_PAGECOUNT = "DELETE_PAGECOUNT"
export const SET_ACTIVEPAGE = "SET_ACTIVEPAGE"
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE"
export const FETCHED = "FETCHED";
export const FETCHING = "“FETCHING”";
export const NOT_FETCHED = "NOT_FETCHED";
export const FAILED = "FAILED"


export const setProducts = (product) => {
    return { type: SET_PRODUCT, payload: product }
}
export const setCount = () => {
    return { type: ADD_COUNT }
}
export const removeCount = () => {
    return { type: REMOVE_COUNT }
}
export const addPageCount = () => {
    return { type: ADD_PAGECOUNT }
}
export const deletePageCount = () => {
    return { type: DELETE_PAGECOUNT }
}
export const setActivePage = (page) => {
    return { type: SET_ACTIVEPAGE, payload: page }
}
export const changeFetchState = () => (dispatch) => {
    dispatch({ type: CHANGE_FETCH_STATE });
  
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/")
      .then((res) => {
        dispatch({ type: FETCHED, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: FAILED, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: FETCHING });
      });
  };