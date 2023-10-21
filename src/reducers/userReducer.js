import {
    SET_USER
} from "./actions/userActions";

const initialState = {
    
}

const userReducer = (state = initialState , action) =>{
    switch(action.type){
        case SET_USER:
            return state;
        default :
        return state;     
    }
    
}

export default userReducer;