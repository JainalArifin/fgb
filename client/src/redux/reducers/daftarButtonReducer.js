const initialState = {
    hiddenButton: false,
    formEmpty: true,
}

function daftarButton(state = initialState, action){
    switch (action.type) {
        case 'CHANGE_BUTTON':
            return { ...state, hiddenButton: action.payload  }
        default:
            return state;
    }
}

export default daftarButton