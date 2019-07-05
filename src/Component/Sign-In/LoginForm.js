import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/admin'
import './LoginForm.css'

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
    <div className="container">
      <div className="box-forInput">
      <div className="Sign-In" >
        <p>Sign In</p>
      </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="email"
            onChange={handleChange}
            />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            />
        </div> 
        <div className="button-input">
          <button onClick={handleSubmit}>sign in</button>
        </div>
      </div> 
    </div>
  )
}


export default connect(null, { login })(LoginForm)