export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeRoles = (roles) => {
    return { type: SET_ROLES, payload: roles }
}

export const changeCategory = (categories) => {
    return { type: SET_CATEGORY, payload: categories }
}

export const changeTheme = (theme) => {
    return { type: CHANGE_THEME, payload: theme }
}

export const changeLanguage = (language) => {
    return { type: CHANGE_LANGUAGE, payload: language }
}