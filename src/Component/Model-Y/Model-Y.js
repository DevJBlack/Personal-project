import React, { useState, useEffect} from 'react'
import Header from '../Header/Header'
import './Model-Y.css'
import axios from 'axios'

function ModelY(props){
  const [product, setProduct] = useState({})
const [number] = useState(1)


useEffect(() => {
  axios.get(`/api/products`).then(res => {
    setProduct(res.data)
  })
}, [])



function viewProduct(product){
  props.history.push(`/product/${product.products_id}`)
}
console.log(product[number]) 
console.log(product)
  return(
    <div>
      <div style={styles.img}>
        <Header />
        <div className="teslaBoxModelY">
            <div className="teslaModelY"> Tesla </div>
            <div className="modelModelY"> Model Y </div>
          </div> 
          <div className="statesBoxModelY">
            <div className="spaceModelY">66cu ft <span> Cargo Space </span></div>
            <div className="rangeModelY">300mi<span>Range</span></div>
            <div className="driveModelY">AWD <span>Dual Motor </span></div>
          </div>
          <div className="buttonBoxModelY">
            <button onClick={() => viewProduct(product[number])} className="ModelYShop">order now</button>
          </div>
        </div>
        <div>
        <iframe title="ModelY" width="100%" height="395" src="https://www.youtube.com/embed/_nX8fJshc0U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <div className="videoBoxModelY" >
            <span className="videoRangeModelY">Range</span>
            <p className="goAnywhereModelY">Go Anywhere</p>
            <p className="carTextModelY">Model Y is fully elecric, so you never need to visit a gas statin again, If you charge overnight at home, you can wake up to a full battery every monring. And when you're on the road, it's easy to plug in along the way--at any public station or with the Tesla charging network. We currently have over 13,000 Superchargers worldwide, with six new locations opening every week.</p>
          </div>
      </div>
    </div>
  )
}

export default ModelY

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbillroberson%2Ffiles%2F2019%2F03%2FTesla-Model-Y-1200x675.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'right 50% bottom 1%'
  }
}