import {
    SET_PRODUCT,
    SET_ACTIVEPAGE,
    ADD_PAGECOUNT,
    DELETE_PAGECOUNT,
    CHANGE_FETCH_STATE,
    ADD_COUNT,
    REMOVE_COUNT
} from "../actions/productActions"

const initialState = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: "NOT_FETCHED"
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state, productList: [action.payload]
            }
        case ADD_COUNT:
            return {
                ...state, totalProductCount: state.totalProductCount + 1
            }
        case REMOVE_COUNT:
            return {
                ...state, totalProductCount: state.totalProductCount - 1
            }
        case SET_ACTIVEPAGE: {
            return {
                ...state, activePage: action.payload
            }
        }
        case ADD_PAGECOUNT: {
            return {
                ...state, pageCount: state.pageCount + 1
            }
        }
        case DELETE_PAGECOUNT: {
            return {
                ...state, pageCount:state.pageCount - 1
            }
        }
        case CHANGE_FETCH_STATE:{
            return {
                ...state , fetchState:action.payload
            }
        }
        default :
        return initialState;

    }
}

export default productReducer;