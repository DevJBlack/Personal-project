import React from 'react'
import { Link } from 'react-router-dom'

function Shop(){
  return (
    <div>
      <div style={styles.img}>
        <nav style={styles.nav}>
        <Link to="/"><img style={styles.imgLogo} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MCA5OS44bDE0LTc4LjdjMTMuMyAwIDE3LjUgMS41IDE4LjEgNy40IDAgMCA4LjktMy4zIDEzLjUtMTAuMUM3OCAxMC4zIDYwLjMgOS45IDYwLjMgOS45TDUwIDIyLjUgMzkuNyA5LjlzLTE3LjcuNC0zNS4zIDguNWM0LjUgNi44IDEzLjUgMTAuMSAxMy41IDEwLjEuNi02IDQuOC03LjQgMTguMS03LjRsMTQgNzguN3oiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTAgNi4zYzE0LjItLjEgMzAuNSAyLjIgNDcuMiA5LjUgMi4yLTQgMi44LTUuOCAyLjgtNS44QzgxLjggMi43IDY0LjcuMyA1MCAuMiAzNS4zLjMgMTguMiAyLjcgMCAxMGMwIDAgLjggMi4yIDIuOCA1LjggMTYuNy03LjMgMzMtOS42IDQ3LjItOS41eiIvPjwvc3ZnPg==" alt="" /></Link>
        <Link to="/"><p style={styles.imgWord}> | Shop </p></Link>
        </nav>
      </div>
    </div>
  )
}

export default Shop

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://auth.tesla.com/images/login-semi-interior.jpg)',
    backgroundRepeat: 'no-repeat',
    /* background-attachment: fixed; */
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: ' 0 20px'
  },
  imgLogo: {
    height: '25px',
    color: 'white'
  },
  imgWord: {
    height: '25px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '0 10px',
    letterSpacing: '5px'
  }
}