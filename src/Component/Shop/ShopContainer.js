import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { getProducts } from '../../redux/reducers/products'

import Product from 

class ShopContainer extends Component{
  componentDidMount(){
    this.props.getProducts()
  }

  render(){
    return(
      <Switch>

      </Switch>
    )
  }
}