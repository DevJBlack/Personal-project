import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import './Model-3.css'

function Model3 (props) {
  const [product, setProduct] = useState({})
const [number] = useState(2)


useEffect(() => {
  axios.get(`/api/products`).then(res => {
    setProduct(res.data)
  })
}, [])
console.log(product)
console.log(product[number])
function viewProduct(product){
  props.history.push(`/product/${product.products_id}`)
}
  return (
    <div>
        <div style={ styles.img }>
          <Header />          
            <div className="teslaBoxModel3">
              <div className="teslaModel3"> Tesla </div>
              <div className="modelCar"> Model 3 </div>
            </div> 
            <div className="statesBoxModel3">
              <div className="speedModel3">3.2s <span> from 0-60 mph</span></div>
              <div className="spaceModel3">310mi<span>Range</span></div>
              <div className="rangeModel3">AWD<span>Dual Motor</span></div>
            </div>
            <div className="buttonBoxModel3">
              <button onClick={() => viewProduct(product[number])}   className="model3Shop">order now</button>
            </div>
          </div>
          <div>
          <iframe title="Model3" width="100%" height="395" src="https://www.youtube.com/embed/NP0MS4fLN1c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            <div className="videoBoxModel3" >
              <span className="videoRangeModel3">Performance</span>
              <p className="goAnywhereModel3">Quickest Acceleration</p>
              <p className="carTextModel3">Model 3 comes with the option of dual motor all-wheel drive, 20" Performance Wheels and Brakes and lowered suspension fo total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph in as little as 3.2 seconds.</p>
            </div>
        </div>
    </div>
  )
}

export default Model3

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://img.olhardigital.com.br/uploads/acervo_imagens/2019/12/r16x9/20191218023526_1200_675_-_tesla_model_3.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}