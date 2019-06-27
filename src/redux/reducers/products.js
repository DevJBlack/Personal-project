import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_FULFILLED = 'GET_PRODUCTS_FULFILLED'

const GET_PRODUCT = 'GET_PRODUCT'
const GET_PRODUCT_FULFILLED = 'GET_PRODUCT_FULFILLED'

let initialState = {
  data: []
}

export default function (state = initialState, action) {
  switch(action.type){
    case GET_PRODUCTS_FULFILLED:
      return { ...state, data: action.payload.data }
    case GET_PRODUCT_FULFILLED:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}

export function getProducts(){
  return {
    type: GET_PRODUCTS,
    payload: axios.get('/api/products')
  }
}

export function getProduct(id){
  return {
    type: GET_PRODUCT,
    payload: axios.get(`/api/products${id}`)
  }
}