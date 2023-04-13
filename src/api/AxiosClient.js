import axios from 'axios';


const AxiosClient = axios.create({
    baseURL: "http://localhost:8000/api/v1"
});

AxiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('LARA_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

AxiosClient.interceptors.response.use((response)=>{
    return response;
},
    (error) => {
        try {
            const {response} = error;
            if(response.status === 401){
                localStorage.removeItem('LARA_TOKEN');
            }
        } catch (error) {
            console.log(error);
        }
        throw error;
    }
);


export default AxiosClient;

