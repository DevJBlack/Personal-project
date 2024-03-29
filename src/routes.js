import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Model_S from './Component/Model-S/Model-S'
import Model_3 from './Component/Model-3/Model-3'
import Model_X from './Component/Model-X/Model-X'
import Model_Y from './Component/Model-Y/Model-Y'
import Roadster from './Component/Roadster/Roadster'
import Energy from './Component/Energy/Energy'
import Signin from './Component/Sign-In/Sign-In'
import Shop from './Component/Shop/Shop'
import BuildYourOwn from './Component/Shop/Build_Your_Own'
import Product from './Component/Shop/Product'
import Register from './Component/Register/Register'

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/models" component={Model_S} />
    <Route path="/model3" component={Model_3} />
    <Route path="/modelx" component={Model_X} />
    <Route path="/modely" component={Model_Y} />
    <Route path="/roadster" component={Roadster} />
    <Route path="/energy" component={Energy} />
    <Route path="/signin" component={Signin} />
    <Route path="/shop" component={Shop} />
    <Route path="/build" component={BuildYourOwn}/>
    <Route path="/product/:id" component={Product}/>
    <Route path="/register" component={Register}/>
  </Switch>
)