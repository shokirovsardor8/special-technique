import api from "./api/Api";
import {configureStore} from "@reduxjs/toolkit";
import users from "./reducers/Users";
export default configureStore({
    reducer: {
        users
    },
    middleware: [api]
})