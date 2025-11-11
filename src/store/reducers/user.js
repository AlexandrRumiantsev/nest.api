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
        default: 
            return {
                ...state
            }
    }

}