const express = require("express")
const router = express.Router()

const products = require('../models/product')
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.get('/', (req, res) => {
    products.findAll()
	.then(data => {
        res.send(data)
    })
	.catch(err => console.log(err))
})

router.post('/', async (req, res) =>{
    const new_product = await products.create({
        name: req.body.name, 
        brand: req.body.brand,
        price: req.body.price
    })
    res.send(new_product)
})

router.route('/:id')
    .get(async (req, res) => {
        try{
            product = await products.findOne({where: {id:req.params.id}})
            if (product == null){
                res.status(404).json({message: 'Product does not exist'})
            }
        } catch (err){
            res.status(500).json({message: err.message})
        }
        res.send(product)
    })
    .put(async (req, res) => {
        try{
            result = await products.update({
                name: req.body.name,
                email: req.body.email,
            }, {
                where: {id:req.params.id}
            })
            if (result == null){
                res.status(404).json({message: 'Product does not exist'})
            }
            res.send(result)
        } catch (err){
            res.status(500).json({message: err.message})
        }
    })
    .delete((req, res) => {
        if(req.params.id in products){
            delete products[req.params.id]
            res.send({
                status: 200,
                message:"Product successfully deleted"
            })
            console.log(products)
        } else{
            res.send({
                status:404,
                message:"Product ID not found"
            })    
        }
    })

router.param("id", (req, res, next, id)=>{
    req.product = products[id]
    next()
})

module.exports = router;