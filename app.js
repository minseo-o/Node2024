const express = require('express')
const app = express()
const port = 3000

//get mothod 요청에 대한 라우팅
app.get('/', (req , res) =>{
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`listeninf on port ${port}`)
})

app.get('/cute', (req, res) =>{
    res.send('cute jisu')
})

