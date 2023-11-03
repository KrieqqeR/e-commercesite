import {
  SET_USER,
} from "../actions/userActions";

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, // Önceki state'i koru
        user: action.payload // Yalnızca kullanıcıyı güncelle
      };
    default:
      return state;
  }
};

export default userReducer;