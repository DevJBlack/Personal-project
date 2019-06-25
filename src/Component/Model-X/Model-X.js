import React from 'react'
import Header from '../Header/Header'

function ModelX(){
  return (
    <div>
      <div style={styles.img}>
        <Header/>
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