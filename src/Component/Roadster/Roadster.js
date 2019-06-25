import React from 'react'
import Header from '../Header/Header'

function Roadster(){
  return(
    <div>
      <div style={styles.img}>
        <Header />
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