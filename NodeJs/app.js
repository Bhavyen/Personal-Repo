const express = require('express')
const app = express();
let {people} =require('.//node-express-course/02-express-tutorial/data')

//static assets
app.use(express.static('./node-express-course/02-express-tutorial/methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json 
app.use(express.json())

app.get('/api/people' ,(req,res) =>{
	res.status(200).json({success:true, data: people})
})

app.post('/api/people' , (req,res) =>{
	const {name} =req.body;
	if(!name){
		return res.status(400).json({success:true,person:name})
	}
	res.status(200).json({success:true,person:name})
})
app.post('/login', (req,res) =>{
	console.log(req.body)
	const {name} = req.body;
	if(name){
		return res.status(200).send(`Welcome ${name}`)
	}
	res.status(200)
	.send('Please Provide Credentials')
})

app.listen(2000,() =>{
	console.log('Listening on port 2000')
})