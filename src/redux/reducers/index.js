import { combineReducers } from 'redux';
import adminReducers from './adminReducers'
import blogReducers from './blogReducers'

export default combineReducers({
    adminReducers,
    blogReducers
})
