import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // стандартный Local Storage
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist'; 
import tasksReducer from './reducers/tasks'
import userReducer from './reducers/user'

const persistConfig = {
  key: 'root', // Уникальное ключевое слово для всего стора
  storage,     // Используем стандартное хранение в localStorage
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // создаём новый обернутый редьюсер

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);


export let persistor = persistStore(store);

export default store;