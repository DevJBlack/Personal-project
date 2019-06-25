import React from 'react'
import Header from '../Header/Header'

function Model3 () {
  return (
    <div>
        <div style={ styles.img }>
          <Header />

        </div>
    </div>
  )
}

export default Model3

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/model3-proto/hero/model-3.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}