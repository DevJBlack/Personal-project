import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getAdmin, login } from '../../redux/reducers/admin'
import { Redirect, Link } from 'react-router-dom'
import './Register.scss'
import axios from 'axios'

const Register = (props) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const {  history, admin } = props
  console.log(props)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({
      ...info,
      [name]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post('/auth/register', info).then(res => {
      props.login(info)
      history.push('/signin')
    })
  }

  
  if(admin){
    return <Redirect to='/signin'/>
  }

  return (
    <div className="regScreen">  
      <div className="containerReg">
        <div className="boxForInputReg">
         <div className="buttonAccount">
          <Link to='/signin'><p className="accountButton" >Already Have An Account?</p></Link>
         </div> 
        <div className="register" >
          <p>Register</p>
        </div>
        <form>
        <div>
            <input
              name='name'
              type='text'
              placeholder='Name'
              onChange={handleChange}
            />
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
          <div className="buttonInputReg .firstButtonReg">
          <button onClick={handleRegister} type='submit'>Register</button>
          </div>
        </form>
        </div> 
      </div>
    </div>
    )
  }
  
const mapDispatchToProps = {
  getAdmin,
  login
}

const mapStateToProps = reduxState => {
  return {
    admin: reduxState.admin.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (Register)




// const styles = {
//   img: {
//     height: '100vh',
//     backgroundImage: 'url(https://auth.tesla.com/images/roadster-dontpanic.jpg)',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }
// }

// <div>
//   <form>
//       <input 
//         type='text' 
//         name='name' 
//         onChange={handleChange}
//         placeholder='name'/>
//       <input 
//         type='text' 
//         name='email' 
//         onChange={handleChange}
//         placeholder='email'/>
//       <input 
//         type='password' 
//         name='password' 
//         onChange={handleChange} 
//         placeholder='password'/>
//   </form>
// </div>