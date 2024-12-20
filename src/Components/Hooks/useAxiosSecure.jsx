import axios from 'axios'
import useContact from './useContact';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://cyclist-club-server-side.vercel.app'
})

const useAxiosSecure = () => {
    const {logOut} = useContact(AuthContext)
    const navigate = useNavigate()
    // Add a request interceptor
axiosSecure.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    config.headers.authorization =`Bearer, ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosSecure.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async(error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response.status;
    if(status === 401 || status === 403){
        await logOut()
        navigate('/login')
    }

    return Promise.reject(error);
  });


  return axiosSecure
}

export default useAxiosSecure