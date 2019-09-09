import React, { useState } from 'react'

const UpdateShop = (props) => {
  const [edit, setEdit] = useState({
    name: '',
    disc: '',
    price: 0,
    image_url: ''
  })

  const handleUpdate = (e) => {
    const {name, value} = e.target
    setEdit({
      ...edit,
      [name]: value
    })
  }


  return (
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
    <div>
      <button onClick={()=> props.updateProduct(props.product, edit)}>Update Confirm</button>
    </div>
    <div>
      <button onClick={() => props.deleteProduct(props.product)}>Delete</button>   
    </div> 
    </div>
  )
}

export default UpdateShop