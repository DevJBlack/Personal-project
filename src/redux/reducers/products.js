import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_FULFILLED = 'GET_PRODUCTS_FULFILLED'

const GET_PRODUCT = 'GET_PRODUCT'
const GET_PRODUCT_FULFILLED = 'GET_PRODUCT_FULFILLED'

const CREATE_PRODUCTS = 'CREATE_PRODUCTS'
const CREATE_PRODUCTS_FULFILLED = 'CREATE_PRODUCTS_FULFILLED'

const DELETE_PRODUCT = 'DELETE_PRODUCT'
const DELETE_PRODUCT_FULFILLED = 'DELETE_PRODUCT_FULFILLED'

const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const UPDATE_PRODUCT_FULFILLED = 'UPDATE_PRODUCT_FULFILLED'

let initialState = {
  data: []
}

export default function (state = initialState, action) {
  switch(action.type){
    case GET_PRODUCTS_FULFILLED:
      return { ...state, data: action.payload.data }
    case GET_PRODUCT_FULFILLED:
      return { ...state, data: action.payload.data }
    case CREATE_PRODUCTS_FULFILLED:
      return { ...state, data: action.payload.data }
    case DELETE_PRODUCT_FULFILLED:
      return { ...state, data: action.payload.data }
    case UPDATE_PRODUCT_FULFILLED:
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
    payload: axios.get(`/api/products/${id}`)
  }
}

export function createProducts(){
  return {
    type: CREATE_PRODUCTS,
    payload: axios.get('/api/products')
  }
}

export function deleteProduct(id){
  return {
    type: DELETE_PRODUCT,
    payload: axios.delete(`/api/products/${id}`)
  }
}

export function updateProduct(id){
  return {
    type: UPDATE_PRODUCT,
    payload: axios.put(`/api/products/${id}`)
  }
}