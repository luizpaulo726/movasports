import api from './api.js'

export const cadastrarUsuario = (dadosCadastro) => {
    console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
    return api.post('/atletas', dadosCadastro)
}