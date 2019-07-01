import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Product(props){
  const [ product, setProduct ] = useState({})

  let { id } = props.match.params

  useEffect(() => {
    axios.get(`/api/product/${id}`).then(res => {
      setProduct(res.data)
    })
  }, [id])

  console.log(props)

  return(
    <div>
      <p>{product.name}</p>
      <p>{product.disc}</p>
      <h1>{product.price}</h1>
      <img src={product.image_url} alt="" />
      <h1>Thank you Kevin</h1>
    </div>
  )
}

export default Product