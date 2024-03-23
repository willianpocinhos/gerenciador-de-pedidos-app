import axios from "axios";
const apiUrl = 'https://gerenciador-de-pedidos-app.vercel.app'

const address = axios.create({
    baseURL: apiUrl
})

export default address
