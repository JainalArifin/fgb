import { combineReducers } from 'redux';
import adminReducers from './adminReducers'
import blogReducers from './blogReducers'
import daftarButton from './daftarButtonReducer'

export default combineReducers({
    adminReducers,
    blogReducers,
    daftarButton,
})
