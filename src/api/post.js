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
}