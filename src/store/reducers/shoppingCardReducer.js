import {
    SET_LIST,
    SET_PAYMENT,
    SET_ADDRESS
} from "../actions/shoppingCardActions"

const initialState = {
    card: [{ count: 0, checked: false, product: {} }],
    payment: {},
    address: {}
}

const shoppingCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state, card: [...state.card, { count: 1, checked: true, product: action.payload }]
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