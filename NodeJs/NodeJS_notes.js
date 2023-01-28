//GLOBALS - NO WINDOW

/*

__dirname - path to current directory
__filename - file name
require - function to use modules(CommonJS)
module - info about current module(file)
process - info about environment where the program is being executed

*/

// not related to nodejs
// setInterval(function_to_be_executed,time)
setInterval(hello,1000)
function hello()
{
    console.log("hello")
}
//ctrl+c to exit   

/*
Concepts 

CommonJS
-> CommonJS is a project with the goal to establish conventions on the module ecosystem for JavaScript outside of the web browser. The primary reason for its creation was a major lack of commonly accepted forms of JavaScript module units which could be reusable in environments different from that provided by conventional web browsers running JavaScript scripts.

ES6
-> ES6 stands fo ECMAScript and was a revision of javascript. The only thing needed to know is that ES6 and javascript words are sometimes synonymously used

Modules
-> Writing large chunks of code in a single file doesn't make any sense. It would become too complicated for the programmer.That's why we divide the code into different pieces known as modules. 

->Every file in NodeJS is considered as a module (by default thanks to CommonJS)

-> Only share the absolute minimum code when creating modules.
*/

/*Creating First Module*/
//require is used to access modules
//require('filepath')
//you don't need to write .js in the end(it is assumed)
//filepath always begins with a './'
//Module:first_module.js
let test = require('./first_module');//test becomes an object
test.demo();
console.log(test.name)
//keep in mind there are multiple ways to use exports
//Using destructuring
let {name:temp_name} = require('./first_module');//test becomes an object
console.log(temp_name)
//There is an alternative syntax in
//Module:first_module.js
//Mind-Grenade
//Module:mind_grenade.js
require('./mind_grenade');

/*
Concepts

Built-in Modules
->There are 4 built in modules namely:
* OS
* PATH
* FS
* HTTP

-> There are a shit ton of methods inside these modules. Just go to the official nodejs website, find the current version and then you can go to the module to explore its methods when required.
*/

/*
Concepts

OS Module
->The os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require('os')

->The above way can be used to access the os module but if you only need to access one of its methods/properties then just destructure it.

*/

/* OS Module */
const os = require('os')
const user = os.userInfo();//gives info about the user
console.log(user)
const current_time = os.uptime();//gives system uptime
console.log(current_time);
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
//These are just some basic methods in the OS module 
//There are plenty more

/* 
Concepts 

Path Module
-> The Path module provides a way of working with directories and file paths.
-> The syntax for including the Path module in your application:
const path = require('path')

*/

/* Path Module */
const path= require('path');
console.log(path.sep)//gives the seperator used for a particular system
const filepath = path.join('path_module', 'sub','sample.txt');//Returns the joined path seperated by the path seperator
console.log(filepath)
const base= path.basename(filepath);//gives the last file directly in the path 
console.log(base)
const ab = path.resolve(__dirname,'path_module','sub','sample.txt');//gives the absolute path
console.log(ab)

/*
Concepts
FS Module
-> The Node.js file system module allows you to work with the file system on your computer.

-> Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files

-> You can use this module synchronously or asynchronously

*/

/* FS Module (Sync) */
const fs = require('fs');
const first= fs.readFileSync('./path_module/sub/first.txt','utf-8');
console.log(first)
fs.writeFileSync('./path_module/sub/third.txt','Third file written')//Writes a file and creates it if it does not exist
//Reading from one file and writing in another
const file1= fs.readFileSync('./path_module/sub/first.txt');//by default the file encoding is utf-8
const file2= fs.readFileSync('./path_module/sub/third.txt');
fs.writeFileSync('./path_module/sub/result.txt',`${file1 + file2}`);

/* FS Module (Async) */
const fs= require ('fs');
//fs.readFile( filename, encoding, callback_function )
//fs.writeFile( filename, data,encoding, callback_function )
fs.readFile('./path_module/sub/first.txt','utf-8', (err,result)=>{
    if(err)
    {
        console.log(err +'e1');//e1,e2 and e3 is to determine which error is occurring
    }
    else
    {
        const f1= result;
        fs.readFile('./path_module/sub/third.txt','utf-8',(err,result)=>
        {
            if(err)
            {
                console.log(err +'e2');
            }
            else
            {
                const f2=result;
                fs.writeFile('./path_module/sub/result2.txt',
                `The output is ${f1+f2}` ,
                (err,result) => {
                    if(err)
                    {
                        console.log(err +'e3');
                    }
                    else
                    {
                        console.log(result)
                    }

                })
            }
        })
    }
})
//Sync vs Async
/*
->In sync the code runs normally i.e line by line
This isnt good as when a single user needs this functionality other users have to wait to do anything in the app as node would first execute the code for user1 and then move on to other users

->In async this does not happen.Node would first offload the function for user1 and move on with the code and eventually when the function for user1 is executed it shows the result. This is important as it allows node to serve other users while working for user1.

->That's why when creating scalable products we use the async approach
*/

const fs=require('fs')
console.log('start')
const fie1= fs.readFileSync('./path_module/sub/first.txt');
const fie2= fs.readFileSync('./path_module/sub/third.txt');
fs.writeFileSync('./path_module/sub/result.txt',`${fie1 + fie2}`);
console.log('done')
console.log('end')

console.log('start')
fs.readFile('./path_module/sub/first.txt','utf-8', (err,result)=>{
    if(err)
    {
        console.log(err +'e1');
    }
    else
    {
        const f1= result;
        fs.readFile('./path_module/sub/third.txt','utf-8',(err,result)=>
        {
            if(err)
            {
                console.log(err +'e2');
            }
            else
            {
                const f2=result;
                fs.writeFile('./path_module/sub/result2.txt',
                `The output is ${f1+f2}` ,
                (err,result) => {
                    if(err)
                    {
                        console.log(err +'e3');
                    }
                    else
                    {
                        console.log('done')
                    }

                })
            }
        })
    }
})
console.log('end')

/* 
Concepts
HTTP Module
-> Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
-> It is the module which will be later used to setup a server.
*/

/*HTTP Module*/
const http=require('http')
//req -> incoming request
//res -> outgoing response
const server=http.createServer((req,res)=>{
    if(req.url == '/')//homepage and it is generally denoted by just a '/'
    {
        res.end('hello world');
    }
    if(req.url =='/about') //about page
    {
        res.end('welcome to about page')
    }
    //error page if the client tries to access some random page
    res.end(`
    <h1>lamo what </h1>
    <a href="/">back home</a>
    `
    );
})

server.listen(4200)//server port 

/*
Concepts
-> npm stands for Node Package Manager and comes with node. It basically allows us to use code written by other developers i.e reusable code

-> anyone can write and publish code on the npm website so stick to only using the popular ones.

Side Note: The words 'package','module' and 'dependency' mean the same thing

General npm commands
npm- global command -> comes with node
npm --version -> tells the version of node

Commands for installing packages
local dependency -> use it only in this particular project
npm i <packagename>

global dependency -> use it in any project
npm install -g <packagename>

package.json
-> package.json is a file containing important info about the project/package

->There are 3 ways of creating package.json:
1. Manually creating package.json i.e writing it line by line.
2. Use the command npm init (step by step asks questions for the properties,press enter to skip)
3.npm init -y (uses default properties)

-> When you add a package using npm commands mentioned above it creates a folder called node_modules to store not only that dependency but also other dependencies required by this dependency.
 
-> When using github you usually dont push the node_modules folder as it gets too big as the project goes on. You ignore that file using git ignore. So when you clone a rep from github it wouldn't have the node_modules folder. Use the command:
npm install
This installs all the required dependencies

-> There are  alot of dependencies made just for developers and aren't used by the end user. They just help the development process. We call them dev dependencies. Command:
npm i <pacakgename> -D

-> To uninstall a package use the command:
npm uninstall <package_name>

-> Nodemon dependency is used for easily executing code without having to run it again and again (its a dev dependency)

-> We generally don't use global command for dependencies instead we use another way of installing i.e npx.It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.   

*/

/*
Concepts
Event Loop
-> The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

-> Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. 
*/
//event loop example
const fs=require('fs')
//Example 1
console.log("first")
fs.readFile('./path_module/sub/first.txt','utf-8', (err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(res)
    }
})
console.log("next")
//Example 2
//Process starts
console.log("first")
setTimeout (()=> {
    console.log("second")
},1000)
console.log("third")
//Process ends 
//setTimeout executes the code in that interval once whereas setInterval keeps on going
//Example 3
const http =require('http')

const server_2 = http.createServer((req,res) => {
    console.log('request event')
    res.end('hello world')
})

server_2.listen((3000),()=> {
    console.log("server successfully created")
}) 


/*
Concepts 
Blocking Code
-> It is a type of code that blocks/delays us from getting the output 
*/
//Example of blocking code
const http = require('http')

const server_3= http.createServer((req,res) =>{
    //The nested loops are the blocking code
    //the nested for loops delay the webpage
    //All webpages are delayed as the loop is executed first
    
    
    if(req.url == '/')
    {
        res.end('Home page')
    }
    if(req.url == '/about')
    {
        for(let i =0;i<100;++i)
        {
            for(let j=0;j<50;++j)
            {
                console.log(i , j)
            }
        }
        res.end('About page')
    }
    
})
server_3.listen(2000)
//A cleaner way of reading multiple files without nesting (Not generally used cozz there is a better option) using async await
const {readFile} = require('fs')
const temp = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,result) =>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result)
            }
        })
    })

}
const start_temp = async () =>
{
    try{
    const first_file= await temp('./path_module/sub/first.txt')
    const second_file= await temp('./path_module/sub/third.txt')
    console.log(first_file,second_file)
    }
    catch(error)
    {
        console.log(error)
    }

    
}
console.log(start_temp())
//420
//The above method is still a bit messy as if you wanted to write a file you would need to create another function 
//.promises promisifies the two(promisify is a method of util module)
const {readFile,writeFile} = require('fs').promises
const temp_async = async () => {
    try
    {
        const first_file_temp = await readFile('./path_module/sub/first.txt','utf-8');
        const second_file_temp = await readFile('./path_module/sub/third.txt','utf-8');
        await writeFile('./path_module/sub/result3.txt',`File 1 : ${first_file_temp} \nFile 2: ${second_file_temp}`)
        console.log(first_file_temp,second_file_temp)

    }
    catch(e)
    {
        console.log(e)
    }
}
temp_async();

/*
Concepts
->Every action on a computer is an event. Like when a connection is made or a file is opened.
->Node.js has a built-in module, called "Events"(which is a class), where you can create-, fire-, and listen for- your own events.
->In addition, all event properties and methods are an instance of an EventEmitter object.
*/
const EventEmitter = require('events');//EventEmitter is a class

const customEmitter = new EventEmitter();//customEmitter is an object of EventEmitter

//on() listens for an event
//'response' is the name of the event
//emit() emits an event
//the arrow function is the response to the emitted event
//we can have as many as on() functions we want with other logic in them
//on() comes befor emit() as you listen to the event before emitting it
customEmitter.on('response', (name) =>{
    console.log(`data received`)
    console.log(`name: ${name}`)
})
customEmitter.on('response', () =>{
    console.log(`other log`)
})
customEmitter.emit('response','john');

//Creating a server using Event Emitter API
const http_2= require('http');

const server_4 = http_2.createServer();

server_4.on('request' , (req,res) =>{
    res.end('response to the request')
})

server_4.listen(4000);

/*
Concepts
Streams
-> There are 4 streams in nodejs:
1. Writeable Stream: Used to write data sequentially
2. Readable Stream: Used to read data sequentially
3. Duplex Stream: Used to write and data sequentially
4. Transform Stream: Used to modify files when reading/writing a file

*/
//It is used to read a file in chunks rather than the whole thing
const {createReadStream} = require('fs')

const stream = createReadStream('./path_module/sub/bigfile.txt');

stream.on('data', (result) =>{
    console.log(result)

})
//Some imp points
//default 64kb
//last buffer - remainder
//highWaterMark - to control the size of each chunk

const {createReadStream} = require('fs')

const stream_2 = createReadStream('./path_module/sub/bigfile.txt',{
    highWaterMark: 90000,
    encoding: 'utf-8'
});
stream_2.on('data', (result) =>{
    console.log(result)
})
//Error event (suppose if the filepath is wrong)
stream_2.on('error', (result) =>{
    console.log(result)
})

/* End of the NodeJS Tutorial */