/*
Concepts
-> ExpressJS is a framework of NodeJS specifically the http module.
*/
const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})//Writes the header
    res.write('<h1>Home Page</h1>')//Display stuff on the webpage
    res.end()//Explicit command indicating the end of responses to the browser
})
.listen(2200,() =>{
    console.log('Port:2200')
})

//Writing an HTML File 
const http = require('http')
const {readFileSync}= require('fs')
const file= readFileSync('./index.html')
http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.writeHead(200,{'content-type':'text/html'})//Writes the header and reads the content as html and not plain text
        res.write(file)//Display stuff on the webpage
        res.end()//Explicit command indicating the end of responses to the browser
    }
    
})
.listen(2200,() =>{
    console.log('Port:2200')
})

const http = require('http')
const {readFileSync}= require('fs')
const file_temp= readFileSync('./navbar-app/index.html')
const file2= readFileSync('./navbar-app/styles.css')
const file3= readFileSync('./navbar-app/logo.svg')
const file4= readFileSync('./navbar-app/browser-app.js')
http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(file_temp)
        res.end()
    }
    else if(req.url == '/style.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(file2)
        res.end()
    }
    else if(req.url == '/logo.svg')
    {
        res.writeHead(200,{'content-type':'text/svg+xml'})
        res.write(file3)
        res.end()
    }
    else if(req.url == '/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(file4)
        res.end()
    }
})
.listen(2200,() =>{
    console.log('Port:2200')
})

//The problem with this method and why express is needed is because if the html file uses resources such as imgs or css we would need to send each resource sperately like the above

const express = require('express');
const app=express();

/* 
Common methods used
Requests by the users
app.get    -> Read Data
app.post   ->Insert Data
app.put     -> Update Data
app.delete  -> Delete Data
app.all
app.use     ->Setup the middleware
app.listen
*/

app.get('/', (req,res)=>{
    console.log('Request')
    res
    .status(200)
    .send('Home Page')
})
app.get('/about',(req,res) =>{
    res.status(200).send('About Page')
})
app.all('*', (req,res) =>{
    res
    .status(404)
    .send('Error 404 Not Found')
})

app.listen(2000, () =>{
    console.log('Port: 2000')
})

/* Express App Example */
// const express = require('express');
const path= require('path');
// const app = express();

//Used to send files to the server
//Files that the browser doesnt change
//css files,imgs for html etc
app.use(express.static('./public'))

app.get('/',(req,res) =>{
    console.log('Request Received')
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*' , (req,res)=>{
    res
    .status(404)
    .send('404 Not Found')

})


app.listen(2000, () => {
    console.log('Port:2000')
})
//Now in the above code note that the html file itself a static file which means you dont need to write the sendfile code. Just dump it in the static folder

//Updated Code
// const express = require('express');
// const path= require('path');
// const app = express();


app.use(express.static('./public'))


app.all('*' , (req,res)=>{
    res
    .status(404)
    .send('404 Not Found')

})


app.listen(2000, () => {
    console.log('Port:2000')
})
//No need to write the adress cozz the html file would contain it already

/* 
Concepts
API(Apllication Programming Interface) vs SSR (Server Side Rendering)
-> We mainly use express to either setup an api or a ssr template.

API
-> In express , when we say api we mean to setup an http interface to interact with our data. 
-> Data is sent with JSON(JavaScript Object Notation).
-> To send our response we use res.json()

SSR
->We use SSR to setup templates and sendback entire html,css,js etc ourself using res.render()
*/

// API 
/* 
We setup an API to share data. So we create an http interface that the frontend app would use to grab the data.
*/
//Example
// const express = require('express')
// const app = express()
const {products} =require('./node-express-course/02-express-tutorial/data.js')

//res.json() sends any type of data (objects,arrays,variables etc) using JSON.stringify()
app.get('/', (req,res) =>{
    res.json(products)
})

app.listen(2000,() =>{
    console.log('Listening on 2000')
})

//Only taking some data and not all of it
// const express = require('express')
// const app = express()
const {products} =require('./node-express-course/02-express-tutorial/data.js')

app.get('/', (req,res) =>{
    res.send('<h1> Home Page </h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req,res) =>{
    const newproducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newproducts)
})

app.listen(2000,() =>{
    console.log('Listening on 2000')
})
/* 
Concepts
Route Parameters
->Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
*/
//The previous code is simplified as we dont have to hard code everything instead the route parameter is used to capture the value and setup a logic to be executed
// const express = require('express')
// const app = express()
const {products} =require('./node-express-course/02-express-tutorial/data.js')

app.get('/', (req,res) =>{
    res.send('<h1> Home Page </h1><a href="/api/products">Products</a>')
})

//The productID acts as a placeholder
app.get('/api/products/:productID', (req,res) =>{
    const {productID}= req.params;//Returns productID
    console.log(req.params)
    // const singleproduct = products.find((product) => product.id ==Number(productID))
    if(productID <= products.length)
    {
        res.json(products[Number(productID-1)])
    }
    else
    {
        res.status(404).send('Not Found')
    }
    
})

app.listen(2000,() =>{
    console.log('Listening on 2000')
})

/* 
Concepts 
Query String
->In simple terms, a query string is the part of a URL (Uniform Resource Locater) after the question mark (?). It is meant to send small amounts of information to the server via the url. This information is usually used as parameters to query a database, or maybe to filter results. It's really up to you what they're used for.
*/
// const express = require('express')
// const app = express()
const {products} =require('./node-express-course/02-express-tutorial/data.js')

app.get('/', (req,res) =>{
    res.send('<h1> Home Page </h1>')
    console.log('Request Received')
})
//Query String
app.get('/api/v1/query' ,(req,res) =>{
    console.log('Request Received')
    console.log(req.query)
    const {search,limit}=req.query
    let sortedproduct=[...products]
    
    if(search)
    {
        //filter() method creates a new array filled with elements that pass a test provided by a function
        sortedproduct= sortedproduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit)
    {
        //slice() method returns selected elements in an array, as a new array
        sortedproduct=sortedproduct.slice(0,Number(limit))
    }
		if(sortedproduct.length<1)
    {
      return res.status(200).json(`Empty string returned`)
    }
    res.status(200).json(sortedproduct)
})

app.listen(2000,() =>{
    console.log('Listening on 2000')
})

/*
Concepts
Middleware
->Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

-> request => middleware => response

-> Whenever  you use middleware you have to suppy the next middleware function or terminate the whole cycle
*/ 
//In the below code we dont have to write the logger code again and again in each get().
// const express = require('express')
// const app = express()
const logger = require('./logger')
app.get('/',logger,(req,res) =>{
	res.send('Home')
})

app.get('/about',logger,(req,res) =>{
	res.send('About')
})

app.listen(2000,() =>{
	console.log('Listening on port 2000')
})

//In the below code we dont need to mention logger again and again app.use() takes care of it
//app.use() should come before all the gets 
// const express = require('express')
// const app = express()
const logger = require('./logger')

//We can also provide a path
//app.use('/api',logger)
//The above method applies to all api paths 
//example : /api/products , /api/items

app.use(logger)

app.get('/',(req,res) =>{
	res.send('Home')
})

app.get('/about',(req,res) =>{
	res.send('About')
})

app.listen(2000,() =>{
	console.log('Listening on port 2000')
})

// const express = require('express')
// const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//logger is executed first then authorize
app.use([logger,authorize])

app.get('/',(req,res) =>{
	res.send('Home')
})

app.get('/about',(req,res) =>{
	res.send('About')
})

app.listen(2000,() =>{
	console.log('Listening on port 2000')
})

//There are mainly 3 types of middleware:
//our own , express, third-party
//the above 2 codes were of the first kind
//The app.use(express.static('./public)) for html files 
//The third party package used is morgan

// const express = require('express')
// const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//Third Party Middleware (Morgan)
app.use(morgan('tiny'))

app.get('/',(req,res) =>{
	res.send('Home')
})

app.get('/about',(req,res) =>{
	res.send('About')
})

app.listen(2000,() =>{
	console.log('Listening on port 2000')
})

/* 
HTTP Methods 
-> get()
-> post()
-> put()
-> delete()
*/
/* 
HTTP Methods 
-> get()
-> post()
-> put()
-> delete()
*/

/* HTML Example */
// const express = require('express')
// const app = express();
let {people} =require('.//node-express-course/02-express-tutorial/data')

app.use(express.static('./node-express-course/02-express-tutorial/methods-public'))

//Just a common approach no need to know the meaning
//A middleware to access data provided by the browser to the server
//parse form data
app.use(express.urlencoded({extended:false}))

app.get('/api/people' ,(req,res) =>{

	res.status(200).json({success:true, data: people})
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

/* Javascript Example */
// const express = require('express')
// const app = express();
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






















