import React from 'react'
import Header from '../Header/Header'
import './Energy.css'

function Energy(){
  return(
    <div>
      <div style={styles.img}>
        <Header />
          <div className="teslaBoxEnergy">
              <div className="teslaEnergy"> Tesla </div>
              <div className="modelEnergy"> Power Everything </div>
            </div> 
            <div className="statesBoxEnergy">
              <div className="solarEnergy">Solar <span> Conver Sunlight into Energy</span></div>
              <div className="powerWallEnergy">Power<span>Store Energy with Powerwall</span></div>
              <div className="accesEnergy">24/7 <span>Access Backup Power Anytime</span></div>
            </div>
          </div>
          <div>
          <img width="100%"  src="https://static-assets.tesla.com/share/tesla_react_app/EnergyHomePage/5734b5de72c41ae97480e9050000b58d.jpg" alt=''/>
            <div className="BoxEnergy" >
              <span className="solarPanelEnergy">Solar</span>
              <p className="produceEnergy">Produce Clean Energy</p>
              <p className="wallTextEnergy">Convert sunlight into clean energy with solar panels on your existing roof, or a brand new Solar Roof.</p>
          </div>
      </div>
    </div>
  )
}

export default Energy

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://static-assets.tesla.com/share/tesla_react_app/EnergyHomePage/79078ffd6335eff831cd4aaceb269ae3.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'right 38% bottom 1%'
  }
}