import React from 'react'
import Header from '../Header/Header'

function Model_S(){
  return(
    <div>
      <div style={styles.img}>
        <Header />

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
    backgroundPosition: 'center'
  }
}