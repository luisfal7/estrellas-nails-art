import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyDXXnzFKPIqC--Zs6cNXox_0sLesKZZPd8'
    }
})

export default authApi