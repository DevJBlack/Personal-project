import React from 'react'
import Header from '../Header/Header'

function ModelY(){
  return(
    <div>
      <div style={styles.img}>
        <Header />
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
    backgroundPosition: 'center'
  }
}