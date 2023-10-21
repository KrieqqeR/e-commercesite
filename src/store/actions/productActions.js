export const SET_PRODUCT = "SET_PRODUCT"
export const ADD_COUNT = "ADD_COUNT"
export const REMOVE_COUNT = "REMOVE_COUNT"
export const ADD_PAGECOUNT = "ADD_PAGECOUNT"
export const DELETE_PAGECOUNT = "DELETE_PAGECOUNT"
export const SET_ACTIVEPAGE = "SET_ACTIVEPAGE"
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE"

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
    return { type: ADD_PAGECOUNT }
}
export const setActivePage = (page) => {
    return { type: SET_ACTIVEPAGE, payload: page }
}
export const changeFetchState = (fetchState) => {
    return { type: CHANGE_FETCH_STATE, payload: fetchState }
}