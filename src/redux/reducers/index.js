import { combineReducers } from 'redux'

import admin from './admin'
import products from './products'

export default combineReducers({ admin, products })