import React, { Component } from 'react'
import './Home.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

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
        <div style={styles.centerWord} >
          <h1 style={styles.model3}>Model 3</h1>
        </div>
        <div style={styles.centerWord}>
           <Link to="/build"> <button style={styles.buttonOne}>Custom Order</button></Link>
           <Link to="/shop"><button style={styles.buttTwo} > existing inventory </button></Link>
        </div>
        </div>
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
    backgroundPosition: 'top'
  },
  centerWord: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'colum',
    marginTop: '27px'
  },

  model3: {
    color: 'white',
    fontWeight: '500',
    fontSize: '40px'
  },

  buttonOne: {
    padding: '15px',
    width: '45vw',
    backgroundColor: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '100px',
    margin: '0 8px'
  },

  buttTwo: {
    padding: '12px',
    width: '45vw',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'white 3px solid',
    borderRadius: '100px',
    color: 'white',
  }

}