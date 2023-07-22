import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from '../features/userSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from 'react-router-dom';



const ax = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

function usePrivateAxios() {

    let {access_token,refresh_token,token_type} = useSelector(state=>state.user);
    

    useEffect(() => {
        const reqInterceptor = ax.interceptors.request.use(
            async (config) => {
                config.headers = {
                    ...config.headers,
                    Authorization : `Bearer ${access_token}`,
                    token_type,
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        const resInterceptor = ax.interceptors.response.use(
            (res)=>res,
            (error)=>{
                let prevRequest = error?.config;
                if( error?.response?.status===401 && prevRequest?.sent!==true ){
                    
                }
            }
        );

        return () => {
            ax.interceptors.response.eject(resInterceptor);
            ax.interceptors.request.eject(reqInterceptor);
        }
    }, []);

    return ax;
}

export default usePrivateAxios