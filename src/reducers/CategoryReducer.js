import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api/ApiCall/ApiCall";

let initialState={
    category: [],
    result: {},
    error: {},


}
const slice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        getCategoryReducer: (state, action) => {
            state.category = action.payload
        },
        addCategoryReducer: (state, action) => {
            state.result = action.payload
        },
        getErrorCategoryReducer: (state, action) => {
            state.error = action.payload
        },
        clearResultCategoryReducer: (state, action) => {
            state.result = {}
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

export function clearCategory() {
    initialState['result'] = {}
}


export const getAllCategory = () => apiCall({
    url: "/api/category/get-all",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.getCategoryReducer.type,
    error: slice.actions.getErrorCategoryReducer.type
})

export const editCategory = (id, data) => apiCall({
    url: "/api/category/edit/" + id,
    method: "put",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addCategoryReducer.type,
    error: slice.actions.getErrorCategoryReducer.type
})

export const deleteCategory = (id) => apiCall({
    url: "/api/category/delete/" + id,
    method: "delete",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.addCategoryReducer.type,
    error: slice.actions.getErrorCategoryReducer.type
})


export const addCategory = (data) => apiCall({
    url: "/api/category/add",
    method: "post",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addCategoryReducer.type,
    error: slice.actions.getErrorCategoryReducer.type
})


export default slice.reducer