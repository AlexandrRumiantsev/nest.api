// начальное состояние
const initialState = {
    list: []
}

// рельюсеры
export default function tasksReducer(state = initialState, action) {
    console.log('REDUCER', action)
    switch(action.type) {
        case 'SET_TASKS': 
            return {
                ...state,
                list: action.payload
            }
        case 'DELETE_TASKS':
            return {
                ...state,
                list: []
            }
        case 'DELETE_ITEM_TASK':
            return {
                ...state,
                list: action.payload
            }
        case 'ADD_ITEM_TASK': 
            return {
                ...state,
                list: action.payload
            }
        case 'EDIT_ITEM_TASK':
            return {
                ...state,
                list: action.payload
            }
        default: 
            return {
                ...state
            }
    }

}