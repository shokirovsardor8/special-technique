import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api/ApiCall/ApiCall";

const slice = createSlice({
    name: 'users',
    initialState: {
        user: [],
        result: {},
        error: {},
        token: {},

    },
    reducers: {
        getuserReducer: (state, action) => {
            state.user = action.payload
        },
        adduserReducer: (state, action) => {
            state.result = action.payload

        },

        signInuserReducer: (state, action) => {
            state.token = action.payload

        },

        erroruserReducer: (state, action) => {
            state.error = action.payload

        },

    }
})



function getToken() {
    return localStorage.getItem("Authorization");
}
function getRole() {
    return localStorage.getItem("role");
}

function getId() {
    return localStorage.getItem("id");
}


export const adduser = (data) => apiCall({
    url: "/out/api/user",
    method: "post",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.adduserReducer.type,
    error: slice.actions.erroruserReducer.type
})

export const activeUser2 = (data) => apiCall({
    url: "/out/api/user/restriction/" + data.id,
    method: "put",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.adduserReducer.type,
    error: slice.actions.erroruserReducer.type
})

export const getuser = () => apiCall({
    url: "/out/api/user",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.getuserReducer.type,
    error: slice.actions.erroruserReducer.type
})

export const deleteuser = (data) => apiCall({
    url: "/out/api/user/" + data,
    method: "delete",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.adduserReducer.type,
    error: slice.actions.adduserReducer.type
})

export const deleteAdmin = (data) => apiCall({
    url: "/out/api/user/deleteAdmin/" + data,
    method: "delete",
    headers: {
        Authorities: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.adduserReducer.type,
    error: slice.actions.adduserReducer.type
})

export const edituser = (data) => apiCall({
    url: "/out/api/user",
    method: "patch",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.adduserReducer.type,
    error: slice.actions.adduserReducer.type
})


export const getAllUser = (data) => apiCall({
    url: "/out/api/user/getAll/" + data,
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },

    success: slice.actions.getuserReducer.type,
    error: slice.actions.getuserReducer.type
})

export const getAllUser2 = () => apiCall({
    url: "/out/api/user/getAll",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.getuserReducer.type,
    error: slice.actions.getuserReducer.type
})

export const passwordReset = (id) => apiCall({
    url: "/out/api/user/resetPassword/" + id,
    method: "put",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.adduserReducer.type,
    error: slice.actions.getuserReducer.type
})

export const signIn = (data) => apiCall({
    url: "/out/api/user/signIn",
    method: "post",
    data,
    success: slice.actions.signInuserReducer.type,
    error: slice.actions.erroruserReducer.type
})

export default slice.reducer