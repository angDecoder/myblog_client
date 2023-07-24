import axios from "axios";
import { toast } from "react-toastify";

const ax = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const getPostByIdApi = async({ id })=>{
    try {
        const res = await ax.get('post/'+id);

        return res.data;
    } catch (error) {
        return  new Error(error);
    }
};

export const addCommentApi = async({ id,email,comment,ax })=>{
    const t = toast.loading('Posting comment .... ');

    try {
        await ax.post('post/comment',{
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
        return new Error(message);
    }
}