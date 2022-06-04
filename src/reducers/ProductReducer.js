import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api/ApiCall/ApiCall";

const slice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        result: {},
        error: {},


    },
    reducers: {
        getproductReducer: (state, action) => {
            state.product = action.payload
        },

        addproductReducer: (state, action) => {
            state.result = action.payload
        },

        getErrorproductReducer: (state, action) => {
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


export const getproduct = (id) => apiCall({
    url: "/api/product/get-one/" + id,
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.getproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const getproductview = () => apiCall({
    url: "/api/product/get-view",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.getproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const getproductsearch = (params) => apiCall({
    url: "/api/product/search",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    params,
    success: slice.actions.getproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const getproductList = (categoryId, params) => apiCall({
    url: "/api/product/get-page-product/" + categoryId,
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    params,
    success: slice.actions.getproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})


export const addproduct = (data) => apiCall({
    url: "/api/product/add",
    method: "post",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})


export const addproductImage = (productId, isMain, data) => apiCall({
    url: "/api/attachment/uploadSystem/" + productId + "/" + isMain,
    method: "post",
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const deleteproductImage = (id) => apiCall({
    url: "/api/attachment/delete/" + id,
    method: "delete",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.addproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const deleteproduct = (id) => apiCall({
    url: "/api/product/delete/" + id,
    method: "delete",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.addproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})

export const editproduct = (id, data) => apiCall({
    url: "/api/product/edit/" + id,
    method: "put",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addproductReducer.type,
    error: slice.actions.getErrorproductReducer.type
})


export default slice.reducer