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




