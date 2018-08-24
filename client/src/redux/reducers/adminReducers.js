const initialState = {
    admin: []
}

function admin( state = initialState, action){
    switch (action.type) {
        case 'GET_ADMIN':
            return {...state, admin: action.payload}
        default:
            return state
    }
}

export default admin