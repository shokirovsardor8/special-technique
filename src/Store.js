import api from "./api/Api";
import {configureStore} from "@reduxjs/toolkit";
import users from "./reducers/Users";
import product from "./reducers/ProductReducer";
import category from "./reducers/CategoryReducer";
export default configureStore({
    reducer: {
        users,
        product,
        category
    },
    middleware: [api]
})