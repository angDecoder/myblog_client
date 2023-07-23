import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getAllDraftsApi } from '../api/draft';


const initialState = {
    totalDraft : 0,
    loading : false,
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
        builder
        .addCase(getAllDrafts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getAllDrafts.fulfilled,(state,{payload})=>{
            state.loading = false;
            console.log(payload);
            payload.drafts.forEach(elem=>{
                state.draftById[`${elem.id}`] = elem;
            })
        })
        .addCase(getAllDrafts,(state)=>{
            state.loading = false;
        })
    }
});

export default draftSlice.reducer;
export const {

} = draftSlice.actions;
