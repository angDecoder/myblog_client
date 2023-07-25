import axios from "axios";
import { toast } from "react-toastify";

const ax = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const getPostByIdApi = async ({ id }) => {
    try {
        const res = await ax.get('post/' + id);

        return res.data;
    } catch (error) {
        return new Error(error);
    }
};

export const addCommentApi = async ({ id, email, comment, ax }) => {
    const t = toast.loading('Posting comment .... ');

    try {
        await ax.post('post/comment', {
            id,
            email,
            comment
        });
        toast.update(t, {
            render: 'Comment saved',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        toast.update(t, {
            render: message,
            type: 'error',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
        return thunkApi.rejectWithValue({ message: error.response.data.message });
    }
}

export const getMyPostApi = async ({ ax },thunkApi) => {
    const t = toast.loading('Fetching Posts .... ');
    try {

        const res = await ax.get('post/');

        toast.update(t, {
            render: 'Posts Fetched',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });

        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        toast.update(t, {
            render: message,
            type: 'error',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
        return thunkApi.rejectWithValue({ message });
    }
}

export const deletePostApi = async({ ax,id },thunkApi)=>{
    const t = toast.loading('Deleting Posts .... ');

    try {
        await ax.delete('post/' + id)
        toast.update(t, {
            render: 'Post Deleted',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });

        return { id };
    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        toast.update(t, {
            render: message,
            type: 'error',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
        return thunkApi.rejectWithValue({ message: error.response.data.message });
 
    }
}