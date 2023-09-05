import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3a05efd699ab4252b8bc7f23a15fa6d2'
    }
})

