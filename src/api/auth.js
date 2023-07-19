import axios from "axios";
import { toast } from "react-toastify";

const ax = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});


export const registerUserJwtApi = async ({ email, password, username, avatar, navigate }) => {
    const t = toast.loading('Registering user ... ');

    // console.log(email,password,username);
    try {
        await ax.post('auth/register/jwt', {
            email,
            password,
            username,
            avatar
        });
        toast.update(t, {
            render: 'User Registered',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });

        navigate('/login')

    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        console.log('here');
        toast.update(t, {
            render: message,
            type: 'error',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
    }
};

export const loginUserJwtApi = async ({ email, password, navigate, to }, thunkApi) => {
    const t = toast.loading('Logging in ... ');
    // console.log(body, thunkApi);
    try {
        const res = await ax.post('auth/login/jwt', {
            email,
            password
        });
        toast.update(t, {
            render: 'User Logged in',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });

        navigate(to);
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
        return thunkApi.rejectWithValue({ message: error.response.data.message });
    }
}

export const loginUserGithubApi = async ({ codeParam, navigate, to }, thunkApi) => {

    const t = toast.loading('Logging in ... ');
    try {
        const res = await axios.get('http://localhost:5000/auth/login/github', {
            headers: {
                code: codeParam
            }
        });

        toast.update(t, {
            render: 'User Logged in',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });

        navigate(to);
        return res.data;
    }
    catch (error) {
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

export const autoLoginApi = async ({ refresh_token, token_type }, thunkApi) => {
    const tst = toast.loading('Logging in ... ');
    try {
        let res;
        if (token_type === 'JWT')
            res = await ax.post('auth/autologin/jwt', { refresh_token });
        else
            res = await ax.post('auth/autologin/github', { refresh_token });

        toast.update(tst, {
            render: 'User Logged in',
            type: 'success',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        })

        console.log('here');
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        toast.update(tst, {
            render: message,
            type: 'error',
            autoClose: true,
            isLoading: false,
            closeOnClick: true
        });
        return thunkApi.rejectWithValue({ message: error.response.data.message });
    }
}