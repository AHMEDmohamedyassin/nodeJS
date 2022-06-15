const http = require('http')

const server = http.createServer( (req , res) => {
    if(req.url === '/'){
        res.write('welcome to home page')
        return res.end()
    }
    if(req.url === '/about'){
        return res.end('this is about page')
    }
    res.end(`
    <h1>Oops</h1>
    <p>can not find your request url </p>
    <a href="/">homepage</a>
    <a href="/about">about</a>
    `)
} )

server.listen(8000)