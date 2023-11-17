export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";


export const setProductList = (product) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: product,
  };
};
