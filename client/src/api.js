import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getVendors = axios.get(`${apiUrl}/vendors`);
const getProducts = (query = "") =>
  axios.get(`${apiUrl}/products?query=${query}`);
const getProductById = (id) => axios.get(`${apiUrl}/products/${id}`);
const getPromotion = axios.get(`${apiUrl}/promotion`);

export { getProductById, getVendors, getProducts, getPromotion };
