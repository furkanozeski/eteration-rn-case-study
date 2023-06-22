/* eslint-disable prettier/prettier */
import axios from 'axios';

const URL = 'https://5fc9346b2af77700165ae514.mockapi.io/';

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {},
});

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use((config) => config);


export const AxiosService = {
    GetProducts: () => axiosInstance.get(`${URL}/products`),
};

export default AxiosService;
