const express = require("express")
const router = express.Router()

const carts = get_cart_data();

router.get('/', (req, res) => {
    res.send({cart_data:carts})
})

router.post('/', (req, res) => {
    carts[req.body.id] = {
        "name":req.body.name,
        "quantity":req.body.quantity
    }

    res.send('POST received', 200).end()
})

router.route('/:id')
    .get((req, res) => {
        res.send({
            cart_id: req.params.id,
            cart_details: req.cart
        })
    })
    .delete((req, res) => {
        if(req.params.id in carts){
            delete carts[req.params.id]
            res.send({
                status: 200,
                message:"Cart successfully deleted"
            })
        } else{
            res.send({
                status:404,
                message:"Cart ID not found"
            })    
        }
    })

router.param("id", (req, res, next, id)=>{
    req.cart = carts[id]
    next()
})

function get_cart_data(){
    var data = {
        "00001":{}
    }
    return data;
}
module.exports = router;