const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {

    requestCount++

    switch (request.url) {
     case '/dog':
        response.write('gav-gav')
        break;
    case '/cat':
    response.write('meow-meow')
    break;
default:
    response.write('404 error')
}

    response.write(' hello, user! ' + requestCount)
    response.end()
})

server.listen (3001)