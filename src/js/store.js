import { combineReducers} from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import { bookReducer,penReducer } from './toolkitSlice';
const rootReducer = combineReducers({
    book: bookReducer,
    pen : penReducer,
});
const store = configureStore({
    reducer : rootReducer,
});


export default store;