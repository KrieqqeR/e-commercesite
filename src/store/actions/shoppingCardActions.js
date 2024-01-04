export const SET_LIST = "SET_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_LASTSELECTED_ADDRESS = "SET_LASTSELECTED_ADDRESS"
export const DECREASE_LIST = "DECREASE_LIST";
export const FILTERED_PRODUCT = "FILTERED_PRODUCT";
export const CHECKED_PRODUCT = "CHECKED_PRODUCT";

export const addToList = (addedProduct) => {
    return { type: SET_LIST, payload: addedProduct };
};
export const setPayment = (payment) => {
    return { type: SET_PAYMENT, payload: payment };
};
export const setAddress = (address) => {
    return { type: SET_ADDRESS, payload: address };
};
export const setLastSelectedAddress = (lastAddress) => {
    return { type: SET_LASTSELECTED_ADDRESS, payload: lastAddress };
};
export const decraseList = (decreasedProduct) => {
    return { type: DECREASE_LIST, payload: decreasedProduct };
};
export const filteredProduct = (filteredProduct) => {
    return { type: FILTERED_PRODUCT, payload: filteredProduct };
};
export const checkedProduct = (checkedProduct) => {
    return { type: CHECKED_PRODUCT, payload: checkedProduct }
};