import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProducts, deleteProduct, updateProduct } from '../../redux/reducers/products'
import axios from 'axios';

function Shop(props){
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState({
    name: '',
    disc: '',
    price: 0,
    image_url: ''
  })
  
  useEffect(() => {
    axios.get('/api/products').then(res => {
      setProducts(res.data)
    })
  },[])
  // console.log(products)

  function deleteProduct(id){
    console.log(id)
    axios.delete(`/api/products/${id}`).then(res => {
      setProducts(res.data)
    })
  }

  function handleSearch(e){
    setSearch( e.target.value)
  }

  function handleUpdate(e){
    const {name, value} = e.target
    setEdit({
      ...edit,
      [name]: value
    })
  }

  function updateProduct(id, edit){
    // console.log(id, edit)
    axios.put(`/api/products/${id}`, { edit }).then(res => {
      setProducts(res.data)
      setEdit({
        name: '',
        disc: '',
        price: 0,
        image_url: ''
      })
    })
  }


  function viewProduct(product){
    props.history.push(`/product/${product.products_id}`)
  }


  return (
    <div style={styles.img}>
      <div>
        <nav style={styles.nav}>
        <Link to="/"><img style={styles.imgLogo} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MCA5OS44bDE0LTc4LjdjMTMuMyAwIDE3LjUgMS41IDE4LjEgNy40IDAgMCA4LjktMy4zIDEzLjUtMTAuMUM3OCAxMC4zIDYwLjMgOS45IDYwLjMgOS45TDUwIDIyLjUgMzkuNyA5LjlzLTE3LjcuNC0zNS4zIDguNWM0LjUgNi44IDEzLjUgMTAuMSAxMy41IDEwLjEuNi02IDQuOC03LjQgMTguMS03LjRsMTQgNzguN3oiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTAgNi4zYzE0LjItLjEgMzAuNSAyLjIgNDcuMiA5LjUgMi4yLTQgMi44LTUuOCAyLjgtNS44QzgxLjggMi43IDY0LjcuMyA1MCAuMiAzNS4zLjMgMTguMiAyLjcgMCAxMGMwIDAgLjggMi4yIDIuOCA1LjggMTYuNy03LjMgMzMtOS42IDQ3LjItOS41eiIvPjwvc3ZnPg==" alt="" /></Link>
        <Link to="/" style={styles.linkText}><p style={styles.imgWord}> | Shop </p></Link>
          <input
            type="text"
            placeholder="Search For Your Dream Car"
            onChange={handleSearch}
          />
        </nav>
      </div>
      { products.filter((obj) => {
        // console.log(search)
        // console.log(typeof obj.name)
        // console.log(obj)
        // console.log(products)
        // console.log(obj.products_id)
      return (
        obj.name.includes(search) 
      )}).map((product) => {
        return(
          <div key={product.products_id} style={styles.productDiv} >
            <div >Name: {product.name}</div>
            <div >Description: {product.disc}</div>
            <div >Price: {product.price}</div>
            <img width="300px" src={product.image_url} alt=""/>
              <div>
                {/* { props.admin ? <button onClick={() => deleteProduct(products.products_id)}>Delete</button> : null} */}
                <button onClick={() => deleteProduct(product.products_id)}>Delete</button>
              
                  <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={handleUpdate}
                    />
                  <input
                    name="disc"
                    type="text"
                    placeholder="disc"
                    onChange={handleUpdate}
                    />
                  <input
                    name="price"
                    type="number"
                    placeholder="price"
                    onChange={handleUpdate}
                    />
                  <input
                    name="image_url"
                    type="text"
                    placeholder="image_url"
                    onChange={handleUpdate}
                    />
                  <button onClick={()=> updateProduct(product.products_id, edit)}>Update Confirm</button> 
                  <button onClick={() => viewProduct(product)} >View Product</button>
                  </div>
                
              </div>
          </div>
         )
        })}
    </div>
  )
}

let mapStateToProps = state => {
  let { data: products } = state.products
  return { products }
}

export default connect(mapStateToProps, { getProducts, deleteProduct, updateProduct })(Shop)

const styles = {
  // img: {
  //   height: '100vh',
  //   backgroundImage: 'url(https://auth.tesla.com/images/login-semi-interior.jpg)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundAttachment: 'fixed'
  // }
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: '35px',
    backgroundColor: 'black'
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
  },
  productDiv: {
    color: 'black',
    border: '1px solid black'
  }
}