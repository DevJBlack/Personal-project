import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/admin'

function LoginForm(props){
  const [info, setInfo] = useState({
    email: '',
    password: ''
  })

   function handleChange(e){
    const {name, value} = e.target
    setInfo({
      ...info,
      [name]: value
    })
  }
  
 

  function handleSubmit(){
    let { email, password } = info
    props.login({ email, password })
  }
  // handleSubmit()

  return(
    <div>
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}


export default connect(null, { login })(LoginForm)