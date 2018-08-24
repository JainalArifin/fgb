
export const daftarButton = () => {
    return (dispatch, getState) => {
        dispatch(changeButton())
    }
}

export const changeButton = () => {
    return {
        type: 'CHANGE_BUTTON',
        payload: true
    }
}