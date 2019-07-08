import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import './Roadster.css'

function Roadster(){
  return(
    <div>
      <div style={styles.img}>
        <Header />
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
          <Link to="/shop"><button className="modelRShop">order now</button></Link>
        </div>
      </div>
      <div>
      <iframe title="roadster" width="100%" height="395" src="https://www.youtube.com/embed/tw4jkyfY4HE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black'
  }
}