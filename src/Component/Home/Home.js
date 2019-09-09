import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  

    return(
      <div className="home-first-pic">
        <div style={styles.img}>
          <Header />
        <div style={styles.centerWord} >
          <h1 style={styles.model}>Model's</h1>
        </div>
        <div style={styles.centerWord}>
          
           <Link to="/shop"><button style={styles.buttTwo} > inventory </button></Link>
        </div>
        </div>
      </div>
    )
  }

export default Home

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://www.tesla.com/content/dam/tesla-site/home-page/images/main-hero-desktop_compressed.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right 50% bottom 25%'
  },
  centerWord: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'colum',
    marginTop: '27px'
  },

  model: {
    color: 'white',
    fontWeight: '500',
    fontSize: '40px'
  },

  buttTwo: {
    padding: '12px',
    width: '350px',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'white 3px solid',
    borderRadius: '100px',
    color: 'white',
  }

}