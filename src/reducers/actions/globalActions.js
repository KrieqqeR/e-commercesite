export const CHANGE_ROLES = "CHANGE_ROLES";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeRoles = (roles)=>{
    return {type: CHANGE_ROLES, payload:roles}
}

export const changeCategory = (categories) =>{
    return {type:CHANGE_CATEGORY,payload:categories}
}

export const changeTheme = (theme) =>{
    return {type:CHANGE_THEME , payload:theme}
}

export const changeLanguage = (language) =>{
    return {type:CHANGE_LANGUAGE , payload: language}
}