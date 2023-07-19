import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { 
    loginUserJwtApi,
    loginUserGithubApi,
    autoLoginApi
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
);

export const autoLogin = createAsyncThunk(
    'user/autologin',
    autoLoginApi
)

const loginPending = (state)=>{
    state.status = USER_STATUS.loading;
}

const loginFulfilled = (state,{ payload })=>{
    state.email = payload.email;
    state.username = payload.username;
    state.userimg = payload.userimg;
    state.status = USER_STATUS.loggedin;
    state.token_type = payload.token_type;
    state.refresh_token = payload.refresh_token;
    const myblog_token = {
        refresh_token : payload.refresh_token,
        token_type : payload.token_type
    }
    localStorage.setItem('myblog-token',JSON.stringify(myblog_token));
};

const loginRejected = (state)=>{
    state.status = USER_STATUS.loggedout;
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(loginUserJwt.pending,loginPending)
        .addCase(loginUserJwt.fulfilled,loginFulfilled)
        .addCase(loginUserJwt.rejected,loginRejected)

        .addCase(loginUserGithub.pending,loginPending)
        .addCase(loginUserGithub.fulfilled,loginFulfilled)
        .addCase(loginUserGithub.rejected,loginRejected)

        .addCase(autoLogin.pending,loginPending)
        .addCase(autoLogin.fulfilled,loginFulfilled)
        .addCase(autoLogin.rejected,loginRejected)
    }
});

export default userSlice.reducer;
export const {

} = userSlice.actions;