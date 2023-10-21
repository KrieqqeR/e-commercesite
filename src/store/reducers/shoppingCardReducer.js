import {
    SET_LIST,
    SET_PAYMENT,
    SET_ADDRESS
} from "../actions/shoppingCardActions"

const initialState = {
    customerList: [],
    payment: {},
    address: {}
}

const shoppingCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state, customerList: [...state.customerList, action.payload]
            }
        case SET_PAYMENT:
            return {
                ...state, payment: action.payload
            }
        case SET_ADDRESS:
            return {
                ...state, address: action.payload
            }
        default:
            return state;
    }
}

export default shoppingCardReducer;