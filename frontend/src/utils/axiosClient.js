import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://codearena-2-0-3.onrender.com/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

