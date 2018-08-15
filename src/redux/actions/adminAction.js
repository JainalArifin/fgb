import axios from 'axios'
import { API_SERVICE } from '../../config/constant'

// GET API
export const getAdminApi = () => {
    return (dispatch, getState) => {
        axios.get(`${API_SERVICE.baseURL}/admin`)
        .then(({ data })=>{
            dispatch(getAdmin(data))
        })
    }
}

export const getAdmin = (data) => {
    return {
        type: 'GET_ADMIN',
        payload: data
    }
}