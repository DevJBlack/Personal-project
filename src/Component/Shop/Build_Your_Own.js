import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProducts } from '../../redux/reducers/products'
import { Link } from 'react-router-dom'
import './Build_Your_Own.css'

import axios from 'axios';


function BuildYourOwn(props){
  const [create, setCreate] = useState({
    name: '',
    disc: '',
    price: 0,
    image_url: ''
  })



  function handleChange(e){
    const {name, value} = e.target
    setCreate({
      ...create,
      [name]: value
    })
  }


  
   function buildCar(){
        axios.post('/api/products', create).then(res => {
        setCreate(res.data)
        props.history.push('/shop')
      })  
    }
  

  return(
    <div style={styles.img}>
      <div>
        <nav style={styles.nav}>
        <Link to="/"><img style={styles.imgLogo} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MCA5OS44bDE0LTc4LjdjMTMuMyAwIDE3LjUgMS41IDE4LjEgNy40IDAgMCA4LjktMy4zIDEzLjUtMTAuMUM3OCAxMC4zIDYwLjMgOS45IDYwLjMgOS45TDUwIDIyLjUgMzkuNyA5LjlzLTE3LjcuNC0zNS4zIDguNWM0LjUgNi44IDEzLjUgMTAuMSAxMy41IDEwLjEuNi02IDQuOC03LjQgMTguMS03LjRsMTQgNzguN3oiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTAgNi4zYzE0LjItLjEgMzAuNSAyLjIgNDcuMiA5LjUgMi4yLTQgMi44LTUuOCAyLjgtNS44QzgxLjggMi43IDY0LjcuMyA1MCAuMiAzNS4zLjMgMTguMiAyLjcgMCAxMGMwIDAgLjggMi4yIDIuOCA1LjggMTYuNy03LjMgMzMtOS42IDQ3LjItOS41eiIvPjwvc3ZnPg==" alt="" /></Link>
        <Link to="/" style={styles.linkText}><p style={styles.imgWord}> | Inventory </p></Link>
        </nav>
      </div>
      <div className="buildYour">
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          name="disc"
          type="text"
          placeholder="disc"
          onChange={handleChange}
          />
        <input
          name="price"
          type="number"
          placeholder="price"
          onChange={handleChange}
          />
        <input
          name="image_url"
          type="text"
          placeholder="image_url"
          onChange={handleChange}
          />
        <div className="buildBut">
          <button className="butBuild" onClick={buildCar}>Inventory</button>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = reduxState => {
  let { data } = reduxState.products
  return { data }
}

export default connect(mapStateToProps, { createProducts })(BuildYourOwn)

const styles = {
  img: {
    height: '100vh',
    backgroundImage: 'url(https://secure.meetupstatic.com/photos/event/2/c/e/c/highres_482231500.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: '35px'
  },
  imgLogo: {
    height: '35px',
    color: 'black'
  },
  imgWord: {
    height: '35px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '0 10px',
    letterSpacing: '5px'
  },
   linkText: {
    textDecoration: 'none'
  }
}