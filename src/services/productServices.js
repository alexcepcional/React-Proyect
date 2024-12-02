import axios from "axios";

export async function getAllProducts(limit = 24) {
 return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getAllCategories() {
 return await axios.get(`https://dummyjson.com/products/categories`)
}