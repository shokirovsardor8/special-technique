import axios from 'axios';

const api = ({ dispatch }) => (next) => (action) => {

    if (action.type !== "api/call") {
        next(action)
        return
    }


    next(action)

    const { url, method, data, success, error, headers, params } = action.payload

    
    axios({
        // baseURL: "http://192.168.100.32:8083",
        // baseURL: "http://localhost:8083",
        // baseURL: "http://192.168.43.168:8083",
        baseURL: "http://185.217.131.138:8083",
        // baseURL: "http://185.217.131.138:8083",
        url,
        method,
        data,
        headers,
        params,
    }).then(res => {
        dispatch({
            type: success,
            payload: res.data,
        })
        console.log(res.data, "success");
    }).catch(err => {
        dispatch({
            type: error,
            payload: err?.response?.data
        })
        console.log(err, "error");
    })

}
export default api;