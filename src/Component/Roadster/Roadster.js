import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './Roadster.css'
import axios from 'axios';

function Roadster(props){
const [products, setProducts] = useState([])



useEffect(() => {
  axios.get('/api/product').then(res => {
    setProducts(res.data)
    console.log(res.data)
  })
  console.log(products)
}, [])
  
function viewProduct(){
  props.history.push(`/product`)
}

  return(
    <div>
      <div style={styles.img}>
        <Header />
        <div>
          <div className="teslaBoxRoadster">
            <div className="teslaRoadster"> Tesla </div>
            <div className="modelRoadster"> Roadster </div>
          </div> 
          <div className="statesBoxRoadster">
            <div className="speedRoadster">1.9s <span> from 0-60 mph</span></div>
            <div className="topRoadster">250mph <span>Top Speed</span></div>
            <div className="rangeRoadster">620 mi <span>Range</span></div>
          </div>
          <div className="buttonBox">
            <button onClick={() => viewProduct()}  className="modelRShop">order now</button>
          </div>            
        </div>
      </div>
      <div className="videoForRoadster">
      <iframe title="roadster" className="roadsterVideo" width="100%" height="395" src="https://www.youtube.com/embed/tw4jkyfY4HE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <div className="videoBoxRoadster" >
          <span className="specsRoadster">Base Specs</span>
          <div className="roadsterList">
            <ul>
              <li>Acceleration 0-60 mph  <span> 1.9 sec</span> </li>
              <li>Acceleration 0-100 mph <span> 4.2 sec</span></li>
              <li>Acceleration 1/4 mile  <span> 4.2 sec </span></li>
              <li>Top Speed    <span> Over 250 mph </span></li>
              <li>Mile Range   <span> 620 miles </span></li>
              <li>Seating <span> 4 </span></li>
              <li>Founder Series Price   <span> $250,000 </span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadster

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero-portrait@2.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black'
  }
}