import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { 
    loginUserJwtApi,
    loginUserGithubApi
} from '../api/auth';

export const USER_STATUS = {
    loggedout : 'LOGGEDOUT',
    loggedin : 'LOGGEDIN',
    loading : 'LOADING'
}

const initialState = {
    username : '',
    email : "",
    userimg : "",
    refresh_token : "",
    token_type : "",
    status : USER_STATUS.loggedout
};

export const loginUserJwt = createAsyncThunk(
    'user/login/jwt',
    loginUserJwtApi
);

export const loginUserGithub = createAsyncThunk(
    'user/login/github',
    loginUserGithubApi
)

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(loginUserJwt.pending,(state)=>{
            state.status = USER_STATUS.loading;
        })

        .addCase(loginUserJwt.fulfilled,(state,{ payload })=>{
            state.email = payload.email;
            state.username = payload.username;
            state.userimg = payload.userimg;
            state.status = USER_STATUS.loggedin;
        })

        .addCase(loginUserJwt.rejected,(state)=>{
            // console.log('here');
            state.status = USER_STATUS.loggedout;
        })

        .addCase(loginUserGithub.pending,(state)=>{
            state.status = USER_STATUS.loading;
        })

        .addCase(loginUserGithub.fulfilled,(state,{ payload })=>{
            state.email = payload.email;
            state.username = payload.username;
            state.userimg = payload.userimg;
            state.status = USER_STATUS.loggedin;
        })

        .addCase(loginUserGithub.rejected,(state)=>{
            // console.log('here');
            state.status = USER_STATUS.loggedout;
        })

        
    }
});

export default userSlice.reducer;
export const {

} = userSlice.actions;