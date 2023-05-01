import { commonRequest } from "./apiConfig";
const BASE_URL = "http://localhost:7000/mw/api/v1" 


export const signUpUserFunction = async (data) => {
    return await commonRequest("POST", `${BASE_URL}/auth/user-signup`, data, {
        "Content-Type": "application/json",
        'auth': localStorage.getItem('authO'),
    });
}

export const loginUserFunction = async (data) => {
    return await commonRequest("POST", `${BASE_URL}/auth/user-login`, data, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    });
}

export const loggedUserFunction = async () => {
    return await commonRequest("POST", `${BASE_URL}/auth/logged-user`, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    });
}

export const getUserPlayerFunction = async (sort, page, userSearchState) => {
    return await commonRequest("GET", `${BASE_URL}/player/get-users-player?sort=${sort}&page=${page}&player=${userSearchState}`, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    });
}

export const getAllPlayerFunction = async (sort, page, userSearchState, date) => {
    return await commonRequest("GET", `${BASE_URL}/player/get-all-player?sort=${sort}&page=${page}&player=${userSearchState}&date=${date}`, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    });
}

export const addPlayerFunction = async (data) => {
    return await commonRequest("POST", `${BASE_URL}/player/add-player`, data, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    })
}

export const viewPlayerFunction = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/player/get-player/${id}`, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    })
}

export const updatePlayerFunction = async (id, data) => {
    return await commonRequest("PUT", `${BASE_URL}/player/update-player/${id}`, data, {
        "Content-Type": "application/json",
        'key': localStorage.getItem('logged'),
    })
}


export const deletePlayerFunction = async (id, data) => {
    return await commonRequest("DELETE", `${BASE_URL}/player/delete-player/${id}`, data, {
        "Content-Type": "application/json",
        'auth': localStorage.getItem('authO'),
    })
}