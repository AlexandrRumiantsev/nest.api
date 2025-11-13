// начальное состояние
const initialState = {
    user: null
}

// рельюсеры
export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'AUTH': 
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT': 
            return {
                ...state,
                user: null
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload[0]
            }
        default: 
            return {
                ...state
            }
    }

}