import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];

}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '44c44fc4923c4f3d99c461de9b2bad5d'

    }
})