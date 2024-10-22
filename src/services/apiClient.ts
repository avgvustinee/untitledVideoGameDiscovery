import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2eb999c7ad6d4447b917e12305c59319'

    }
})