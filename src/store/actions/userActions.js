export const SET_USER = "SET_USER";

export const setUser = (userobj) =>{
    return {type:SET_USER , payload: userobj}
}