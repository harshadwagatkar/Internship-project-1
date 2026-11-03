import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { serverUrl } from '../App';
import { clearUser, setUser } from '../redux/slices/authSlice';

const AuthInitializer = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(
                    `${serverUrl}/api/auth/me`,
                    {
                        withCredentials : true
                    }
                )

                if(response.data.success) {
                    dispatch(setUser(response.data.user))
                } else {
                    dispatch(clearUser)
                }

            } catch (error) {   
                console.log(
                    "Authentication check failed:",
                    error.response?.data?.message
                );

                dispatch(clearUser());
            }
        }

        checkAuth();
    }, [dispatch])



  return null;
}

export default AuthInitializer
