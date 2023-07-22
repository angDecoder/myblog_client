import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import draftReducer from '../features/draftSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        draft : draftReducer,
    }
});

export default store;