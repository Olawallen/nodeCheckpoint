// // importing express and storing it inside a variable called express
// const express = require('express')

// // initialize the express function and store in a variable of app
// const app = express()

// // create a variable called port and store your port
// const port = 9000

// app.get('/',(request, response) => {
//     response.status(200)
//     response.send('welcome to homepage')
// })
// app.get('/about',(request, response) => {
//     response.status(200)
//     response.send('welcome to about page')
// })
// app.get('/services',(request, response) => {
//     response.status(200)
//     response.send('welcome to services page')
// })
// app.get('/testimonial',(request, response) => {
//     response.status(200)
//     response.send('welcome to testimonial page')
// })
// // server listening for request at port
// app.listen(port, () => console.log(`server started successfully at http://localhost:${port}`))


const express = require('express')

const app = express()

const port = 9000

app.get('/', (request, response) => {
    response.status(200)
    response.send(`welcome to home page reloaded`)
})
app.get('/about', (request, response) => {
    response.status(200)
    response.send(`welcome to about page reloaded`)
})
app.get('/services', (request, response) => {
    response.status(200)
    response.send(`welcome to services page reloaded`)
})

app.listen(port, () => console.log('server started successfully'))




















