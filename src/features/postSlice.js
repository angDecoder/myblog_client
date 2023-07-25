import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { deletePostApi, getMyPostApi } from "../api/post";

const initialState = {
    totalPost : 0,
    postFetched : 0,
    postById : {

    },
    myPosts : {
        fetched : false,
        loading : false,
        totalPosts : 0,
        totalComments : 0,
        totalUpvotes : 0,
        totalBookmarked : 0,
        postById : {

        }
    }
};

export const getMyPost = createAsyncThunk(
    'post/mypost',
    getMyPostApi
);

export const deletePost = createAsyncThunk(
    'post/delete',
    deletePostApi
)

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(getMyPost.pending,(state)=>{
            state.myPosts.loading = true;
        })
        .addCase(getMyPost.fulfilled,(state,{ payload })=>{
            state.myPosts.loading = false;
            state.myPosts.fetched = true;
            const { posts } = payload;
            console.log(payload);
            posts.forEach(post => {
                state.myPosts.postById[post.id] = post;
                state.myPosts.totalPosts++;
                state.myPosts.totalUpvotes += post.total_upvote;
                state.myPosts.totalComments += post.total_comment;
                state.myPosts.totalBookmarked += post.bookmarked;
            });
        })
        .addCase(getMyPost.rejected,(state)=>{
            state.myPosts.loading = false;
        })

        // delete post
        .addCase(deletePost.fulfilled,(state,{ payload })=>{
            delete state.myPosts.postById[payload.id];
        })
    }
});

export default postSlice.reducer;

export const {

} = postSlice.actions;

