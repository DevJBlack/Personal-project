import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import './Model-X.css'

function ModelX(){
  return (
    <div>
      <div style={styles.img}>
        <Header/>
          <div className="teslaBoxModelX">
            <div className="teslaModelX"> Tesla </div>
            <div className="modelModelX"> Model X </div>
          </div> 
          <div className="statesBoxModelX">
            <div className="saftyModelX">5star <span> Safest SUV</span></div>
            <div className="spaceModelX">7 ft<span>Room for Seven</span></div>
            <div className="rangeModelX">325 mi <span>Range</span></div>
          </div>
          <div className="buttonBoxModelX">
            <Link to="/shop"><button className="modelXShop">order now</button></Link>
          </div>
        </div>
        <div>
        <iframe title="modelX" width="100%" height="395" src="https://www.youtube.com/embed/EONVXpMvAmc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <div className="videoBoxModelX" >
            <span className="videoRangeModelX">Range</span>
            <p className="goAnywhereModelX">Go Anywhere</p>
            <p className="carTextModelX">Model X can get you anywhere you want to go-- with ineustry-leading range and convenient charging options, all over the world.</p>
          </div>
      </div>
    </div>
  )
}

export default ModelX

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/modelx/hero/hero-portrait.jpg?20170619)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}