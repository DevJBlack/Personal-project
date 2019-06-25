import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header () {
  return (
    <div>
      <nav style={styles.navbar}>
          <Link to="/"><img style={styles.teslaName} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTMiPjxwYXRoIGQ9Ik0wIDBjLjMgMS4xIDEuMyAyLjMgMi42IDIuNmg0LjFsLjIuMVYxM2gyLjVWMi43bC4yLS4xaDQuMWMxLjQtLjQgMi4zLTEuNSAyLjYtMi42SDB6bTc3LjggMTNjMS4zLS41IDItMS41IDIuMi0yLjZINjguN1YtLjFoLTIuNXYxM2gxMS42ek00Ny4zIDIuNmg5YzEuMy0uNCAyLjUtMS40IDIuNy0yLjZINDQuOHY3LjdoMTEuNnYyLjdoLTkuMWMtMS40LjQtMi42IDEuNC0zLjIgMi42SDU5VjUuMkg0Ny4zVjIuNnptMzguMSAyLjZWMTNIODhWNy44aDkuMVYxM2gyLjZWNS4yTTI1LjIgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjEgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuNCAyLjcgMi42TTg3LjcgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42SDg1Yy4zIDEuMiAxLjMgMi40IDIuNyAyLjYiIGZpbGw9IiNGRkYiLz48L3N2Zz4=" alt=""/> </Link>
            <input type="checkbox" id="toggle" />
          <div className="menu">
            <Link to="/models" ><p>Model S</p></Link>
            <Link to="/model3" ><p>Model 3</p></Link>
            <Link to="/modelx" ><p>Model X</p></Link>
            <Link to="/modely" ><p>Model Y</p></Link>
            <Link to="/roadster" ><p>Roadster</p></Link>
            <Link to="/energy" ><p>Energy</p></Link>
          </div>
          <div style={styles.hamburger}>
            <div className="menu">
              <Link to="/shop"><p>Shop</p></Link>
              <Link to="/signin"><p>Sign-in</p></Link>
            </div>
            <label htmlFor="toggle" style={styles.label}>&#9776;</label>
          </div>
      </nav>
    </div>
  )
}

export default Header

const styles = {
  navbar: {
    height: '52px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'transparent',
    padding: '0 20px',
    zIndex: '1'
  },
  teslaName: {
    height: '13px'
  },
  label: {
    color: 'white',
    fontSize: '18px',
    display: 'block'
  },
  hamburger: {
    display: 'flex'
  }
}