import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];

}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '44c44fc4923c4f3d99c461de9b2bad5d'

    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;