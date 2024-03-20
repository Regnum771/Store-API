
const express = require('express')
const app = express()

// Middleware
app.use(express.static("public"))
app.use(express.json())
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200,
}));

// Utility
const dotenv = require('dotenv')
dotenv.config({path: './config/local.env'})
const fetch =  require("node-fetch")

// Route
const productRouter = require('./routes/products')
app.use('/products', productRouter)

const cartRouter = require('./routes/carts')
app.use('/carts', cartRouter)

// Database Connection
const db = require('./database')
const cart = require('./models/carts')
const associations = require('./models/associations')

/*async function upload(apiUrl) {
		try {
			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({"name":"Regnum771", "brand":"lit", "price"
				: 10}),
			});
			const result = await response.json();
			console.log(result)
		} catch (error) {
			console.error("Error:", error);
		}
	}
upload("http://127.0.0.1:3000/products")*/

db.sync()
app.listen(3000)