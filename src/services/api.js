import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,  // deve ser 'http://127.0.0.1:8000/api' por exemplo
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api