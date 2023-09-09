export const loginUser = (userData) => (dispatch) => {
    try {
        dispatch({
            type: 'loginRequest'
        });
    
        dispatch({
            type: 'loginSuccess',
            payload: userData
        })
    } catch (error) {
        dispatch({
            type: 'loginFailure',
        })
    }
}