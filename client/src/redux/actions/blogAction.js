import axios from 'axios'
import { API_SERVICE } from '../../config/constant'

export const getApiBlog =()=> {
    return (dispatch, getState) =>{
        axios.get(`${API_SERVICE.baseURL}/blog`)
        .then(({ data })=>{
            console.log(data, ' <----- cek data opo')
            dispatch(getBlog(data))
        })
    }
}

export const getBlog =(data)=>{
    return {
        type: 'GET_BLOG',
        payload: data,
    }
}