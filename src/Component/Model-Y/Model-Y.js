import React from 'react'
import Header from '../Header/Header'
import './Model-Y.css'
import { Link } from 'react-router-dom'

function ModelY(){
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
            <Link to="/shop"><button className="ModelYShop">order now</button></Link>
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
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/wolverine/hero/model-y_R1@2.jpg/_jcr_content/renditions/cq5dam.tinypng.1440.auto.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'right 50% bottom 1%'
  }
}