import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import './Model-S.css'

function Model_S(){
  return(
    <div>
      <div className='img' style={styles.img}>
        <Header />
         <div className="teslaBox">
          <div className="tesla"> Tesla </div>
          <div className="model"> Model S </div>
         </div> 
        <div className="statesBox">
          <div className="speed">2.4s <span> from 0-60 mph</span></div>
          <div className="space">30cu ft<span>Best in Class Storage</span></div>
          <div className="range">370 mi <span>Range</span></div>
        </div>
        <div className="buttonBox">
          <Link to="/shop"><button className="modelSShop">order now</button></Link>
        </div>
      </div>
      <div>
        <iframe title="ModelS" width="100%" height="395" src="https://www.youtube.com/embed/XB2g7-HgE_g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <div className="videoBox" >
          <span className="videoRange">Range</span>
          <p className="goAnywhere">Go Anywhere</p>
          <p className="carText">Model S can get you anywhere you want to go-- with industry-leading range and convenient charging options, all over the world.</p>
        </div>
      </div>  
    </div>
  )
}
export default Model_S

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/models/hero/model-s-portrait.jpg?20170619)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'right 50% bottom 70%'
  }
}