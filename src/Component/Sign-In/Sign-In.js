import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { logout, getAdmin } from '../../redux/reducers/admin'
import './Sign-In.css'


function Sign(props){
  let { admin, getAdmin } = props



  useEffect(() => {
    getAdmin()
  },[getAdmin])


  return (
    <div style={styles.img}>
      <div >
        <nav style={styles.nav}>
        <Link to="/"><img style={styles.teslaName} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTMiPjxwYXRoIGQ9Ik0wIDBjLjMgMS4xIDEuMyAyLjMgMi42IDIuNmg0LjFsLjIuMVYxM2gyLjVWMi43bC4yLS4xaDQuMWMxLjQtLjQgMi4zLTEuNSAyLjYtMi42SDB6bTc3LjggMTNjMS4zLS41IDItMS41IDIuMi0yLjZINjguN1YtLjFoLTIuNXYxM2gxMS42ek00Ny4zIDIuNmg5YzEuMy0uNCAyLjUtMS40IDIuNy0yLjZINDQuOHY3LjdoMTEuNnYyLjdoLTkuMWMtMS40LjQtMi42IDEuNC0zLjIgMi42SDU5VjUuMkg0Ny4zVjIuNnptMzguMSAyLjZWMTNIODhWNy44aDkuMVYxM2gyLjZWNS4yTTI1LjIgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjEgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuNCAyLjcgMi42TTg3LjcgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42SDg1Yy4zIDEuMiAxLjMgMi40IDIuNyAyLjYiIGZpbGw9IiNGRkYiLz48L3N2Zz4=" alt=""/> </Link>
        </nav>
      </div>
        { admin ? 
        <div className="container">
          <div className="box">
            <div className="admin" >
              <h1 style={styles.hOneWord}>Welcome {admin.name}! </h1> 
            </div>
              <Link to="/build"> <button className="button" >Add To Inventory</button>
              </Link>
              <Link to="/shop"> <button className="button" > Update Shop </button> </Link>
              <button className="logout" onClick={() => props.logout()}>Logout</button>
          </div> 
        </div> 
        :
        <div>
          <LoginForm></LoginForm>
        </div>
      }
    </div>
  )
}

let mapStateToProps = state => {
  let { data: admin } = state.admin
  return { admin }
}

export default connect(mapStateToProps, { logout, getAdmin })(Sign)

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://auth.tesla.com/images/login-semi-interior.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: ' 0 20px'
  },
  teslaName: {
    height: '13px'
  },

  hOneWord: {
    color: 'black'
  }
}