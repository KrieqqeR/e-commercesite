import {
    SET_USER
} from "../actions/userActions";

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.payload
            }
        default:
            return state.user;
    }

}

export default userReducer;