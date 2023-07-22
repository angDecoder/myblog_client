import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getAllDraftsApi } from '../api/draft';


const initialState = {
    totalDraft : 0,
    draftById : {
        'noid' : {
            id : 'noid',
            title : '',
            tags : [],
            content : '',
            description : '',
            cover_image : ''
        }
    }
};

export const getAllDrafts = createAsyncThunk(
    'draft/getall',
    getAllDraftsApi
)


const draftSlice = createSlice({
    name : 'draft',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        
    }
});

export default draftSlice.reducer;
export const {

} = draftSlice.actions;
