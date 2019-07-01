module.exports = {
  products: async (req, res) => {
    try {
        let db = req.app.get('db')
        let products = await db.get_all_products()
        res.send(products)
    } catch ( error ) {
        console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  getProduct: async (req, res) => {
    try {
        let db = req.app.get('db')
        let { id } = req.params
        let products = await db.get_product(id)
        let product = products[0]
        res.send(product)
    }catch ( error ) {
        console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },
  createProduct: async (req, res) => {
    try {
        let db = req.app.get('db')
        const { name, disc, price, image_url } = req.body

        let products = await db.create_products({
          name, 
          disc, 
          price, 
          image_url
        })

        res.send(products)

    } catch ( error ) {
        console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  deleteProduct: async (req, res) => {
    try {
        let db = req.app.get('db')
        const { id } = req.params

        let products = await db.delete_product(id)
         res.send(products)

    } catch ( error ) {
        console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  updateProduct: async (req, res) => {
    try {
        let db = req.app.get('db')
        let { name, disc, price, image_url } = req.body.edit
        let { id } = req.params
        console.log(req.body,req.params)
        id = +id
        price = +price
        let products = await db.update_products({
          id,
          name, 
          disc, 
          price, 
          image_url
        })
        // console.log(products)
        res.send(products)

    } catch ( error ) {
        console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  }
}