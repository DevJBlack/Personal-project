import React, { Component } from 'react'
import './Home.css'
import Header from '../Header/Header'
// import ModelS from '../Model-S/Model-S'

class Home extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div className="home-first-pic">
        <div style={styles.img}>
          <Header />
        </div>
        {/* <ModelS /> */}
  
      </div>
    )
  }
}

export default Home

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/home-page/images/main-hero-desktop_compressed.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}