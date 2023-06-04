const Order = require('../schemas/orderSchema')
const User = require('../schemas/userSchema')


/*CREATE*/
exports.createOrder = (req, res) => {
    const { products } = req.body
    const userId = req.user.dataId

    User.findById(userId)

    .then(user => {
        if (!user) {
             throw new Error('User not found')
        }

        const order = new Order({
            user: userId,
            products: products.map(product => ({
                product: product.product,
                quantity: product.quantity
            }))
        })
        return order.save()
    })
    .then(savedOrder => {
        res.status(201).json(savedOrder)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'Could not create order' })
    })
}

/*FIND*/
exports.getOrder =(req,res) => {

    Order.find({ user: req.params.id })
     .populate('user')
     .populate('products.product')
     .then(orders => {
        res.status(200).json(orders)
    })
      .catch(error => {
        res.status(500).json({ message: 'Could not retrieve orders' })
    })
}