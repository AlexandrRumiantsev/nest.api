export const logout = () => (dispatch) => dispatch(
    {
        type: 'LOGOUT',
        payload: []
    }
)

export const fetchUser = (id) => async (dispatch) => {
    const data = await fetch(`http://localhost:5000/users?id=${id}`).then((response) => response.json())
    
    dispatch(
        {
            type: 'SET_USER',
            payload: data
        }
    )
}