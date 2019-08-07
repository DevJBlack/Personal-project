import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import './Product.css'

function Product(props){
  const [ product, setProduct ] = useState({})
  const [ amount, setAmount ] = useState(0)
  

  let { id } = props.match.params
 

  useEffect(() => {
    axios.get(`/api/product/${id}`).then(res => {
      setProduct(res.data)
      setAmount(res.data.price)
    })
  }, [id])


  async function onToken(token){
    await setAmount(amount)
    token.card = void 0
    axios.post('/api/payment', { token, amount }).then(res => {
      alert(`Congratulations on buying your new ${product.name}!`)
      props.history.push('/')
    })
  }

  return(
    <div>
       <nav style={styles.nav}>
        <Link to="/shop"><img style={styles.imgLogo} src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 13'%3E%3Cpath d='M0 0c.3 1.1 1.3 2.3 2.6 2.6h4.1l.2.1V13h2.5V2.7l.2-.1h4.1c1.4-.4 2.3-1.5 2.6-2.6H0zm77.8 13c1.3-.5 2-1.5 2.2-2.6H68.7V-.1h-2.5v13h11.6zM47.3 2.6h9c1.3-.4 2.5-1.4 2.7-2.6H44.8v7.7h11.6v2.7h-9.1c-1.4.4-2.6 1.4-3.2 2.6H59V5.2H47.3V2.6zm38.1 2.6V13H88V7.8h9.1V13h2.6V5.2M25.2 2.6h9.7c1.3-.3 2.4-1.5 2.6-2.6h-15c.4 1.2 1.4 2.3 2.7 2.6m0 5.2h9.7c1.3-.3 2.4-1.5 2.6-2.6h-15c.4 1.1 1.4 2.3 2.7 2.6m0 5.2h9.7c1.3-.3 2.4-1.5 2.6-2.6h-15c.4 1.2 1.4 2.4 2.7 2.6M87.7 2.6h9.7c1.3-.3 2.4-1.5 2.6-2.6H85c.3 1.2 1.3 2.4 2.7 2.6' fill='%23fff'/%3E%3C/svg%3E" alt="" /></Link>
        <Link to="/" style={styles.linkText}></Link>
        </nav>
      <img className="imageStates" src={product.image_url} alt="" />
      <h1 className="summary">Summary:</h1>
      <br/>
      <p style={styles.pName} >{product.name}</p>
      <br/>
      <p style={styles.descText} >{product.disc}</p>
      <br/>
      <p style={styles.pPrice} ><span style={styles.spanPrice} >Price:</span>{product.price}</p>
      <div className="buttonStrip">
        <StripeCheckout
            className="buttonPay"
            // style={styles.payButton}
            name='Tesla Payment' //header
            // image={imageUrl}
            description='By placing this order you agree to allow Tesla to save your credit card to pay for future servieces as described in the payment terms.' //subtitle - beneath header
            stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
            token={onToken} //fires the call back
            amount={amount * 100} //this will be in cents
            currency="USD" 
            // image={imageUrl} // the pop-in header image (default none)
            // ComponentClass="div" //initial default button styling on block scope (defaults to span)
            // panelLabel={`Submit Payment $${amount}`} //text on the submit button
            locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
            // opened={this.onOpened} //fires cb when stripe is opened
            // closed={this.onClosed} //fires cb when stripe is closed
            allowRememberMe={false} // "Remember Me" option (default true)
            billingAddress={false}
            // shippingAddress //you can collect their address
            zipCode={false}
          >
        </StripeCheckout>
      </div>
    </div>
  )
}

export default Product


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '52px',
    width: '100%',
    color: 'transparent',
    padding: '35px',
    backgroundColor: 'black'
  },
  imgLogo: {
    height: '15px',
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
  },
  pName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25px'
  },

  descText: {
    textAlign: 'center'
  },

  pPrice: {
    textAlign: 'center',
    textSize: '20px'
  },

  spanPrice: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginRight: '10px'
  },

  // payButton: {
  //   marginTop: '50px',
  //   marginLeft: '35%'
  // }
}