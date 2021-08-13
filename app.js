//SETTING UP SERVER WITH JUST HTTP MODULE

const http = require('http')
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) =>{
    // console.log(req.method)

    const url = req.url
    console.log(url)
    //home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()                    
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()    
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()    
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeLogo)
        res.end()    
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()    
    }
    
    //404
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()    
    }
    //res.end('<h1>home page</h1>')
})
server.listen(5000)