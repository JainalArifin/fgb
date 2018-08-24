const initialState = {
    blog: []
}

function blog(state = initialState, action){
    switch (action.type) {
        case 'GET_BLOG':
            return { ...state, blog: action.payload }
        default:
            return state;
    }
}

export default blog