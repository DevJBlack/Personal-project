import React from 'react'
import Header from '../Header/Header'

function Energy(){
  return(
    <div>
      <div style={styles.img}>
        <Header />
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
    backgroundPosition: 'center'
  }
}