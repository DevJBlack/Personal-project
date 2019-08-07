const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv/config')
const path = require('path');

const AuthCtrl = require('./controllers/auth')
const ProductCtrl = require('./controllers/products')
const stripeCtrl = require('./controllers/stripCtrl')

const app = express()

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

massive( CONNECTION_STRING ).then(db => {
  app.set('db', db)
  console.log('DataBase Is Secure')
  app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))
})

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}))
app.use( express.static(`${__dirname}/../build`))

app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.currentUser)

app.get('/api/products', ProductCtrl.products)
app.get('/api/product/:id', ProductCtrl.getProduct)
app.post('/api/products', ProductCtrl.createProduct)
app.delete('/api/products/:id', ProductCtrl.deleteProduct)
app.put('/api/products/:id', ProductCtrl.updateProduct)

app.post('/api/payment', stripeCtrl.pay)

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})