import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAdmin } from '../../redux/reducers/admin'
import { getProducts, deleteProduct, updateProduct } from '../../redux/reducers/products'
import UpdateShop from '../UpdateShop/UpdateShop'
import axios from 'axios';
import './Shop.css'

function Shop(props){
  let { admin, getAdmin } = props
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState({
    name: '',
    disc: '',
    price: 0,
    image_url: ''
  })
const [isEditing, setIsEditing] = useState(false)
 
  
  useEffect(() => {
    axios.get('/api/products').then(res => {
      setProducts(res.data)
    })
  },[])

    useEffect(() => {
      getAdmin()
    }, [getAdmin])
  

  function deleteProduct(id){
    axios.delete(`/api/products/${id}`).then(res => {
      setProducts(res.data)
    })
  }

  function handleSearch(e){
    setSearch( e.target.value)
  }


  function updateProduct(id, edit){
    axios.put(`/api/products/${id}`, { edit }).then(res => {
      setProducts(res.data)
      setEdit({
        name: '',
        disc: '',
        price: 0,
        image_url: ''
      })
      setIsEditing(false)
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
            className="inputShopHeader"
            style={styles.inputField}
            type="text"
            placeholder="Search Vehicles"
            onChange={handleSearch}
          />
        </nav>
        <div style={styles.adminWord}>
          { admin ? <h1> Welcome {admin.name}</h1> : null }         
        </div>
      </div>
      { products.filter((product) => {
      return (
        product.name.includes(search) 
      )}).map((product) => {
        return(
          <div key={product.products_id} style={styles.productDiv} >
            <nav className="navigation">
              <img className="imageCar" src={product.image_url} alt="Tesla Car"/>
              <li><span>Name:</span> {product.name}</li>
              <li><span>Description:</span> {product.disc}</li>
              <li><span>Price:</span> {product.price}</li>
           
              <div>
              
                { admin ?
                isEditing ? 
                  <div className="input-boxes">
                    <UpdateShop 
                      product={product.products_id}
                      updateProduct={updateProduct}
                      deleteProduct={deleteProduct}
                      edit={edit}
                    />
                  <div>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                  </div> 
                  :
                  <button style={styles.editButton} onClick={() => setIsEditing(true)}>Edit</button>
                  :
                  null
                  }
                 <div className="buttonCenter">
                      <button className="viewProduct" onClick={() => viewProduct(product)} >View Product</button>
                </div>
              </div>
              </nav>
          </div>
         )
        })}
    </div>
  )
}

let mapStateToProps = state => {
  let { data: products } = state.products
  let { data: admin } = state.admin
  return { products, admin }
}

let mapToDispatchToProps = {
  getProducts, 
  deleteProduct, 
  updateProduct, 
  getAdmin
}


export default connect(mapStateToProps, ( mapToDispatchToProps ))(Shop)

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: '35px',
    backgroundColor: 'black',
  },
  imgLogo: {
    height: '35px',
    color: 'black',
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
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none'
  },
  inputField: {
    float: 'right',
    backgroundColor: 'transparent',
    border: 'white 2px solid',
    borderRadius: '100px',
    color: 'white'
  },
  adminWord: {
    textAlign: 'center'
  },
  editButton: {
    padding: '10px',
    width: '175px',
    background: 'lightskyblue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '100px',
    color: 'white',
    margin: '5px'
  }
}