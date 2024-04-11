const express = require('express')
const app = express()
const middle1 = require('./my_modules/middle1')
//미들웨어 등록 use 모든  method (get post put delete 등등에 대해 처리 )
//arg로 경로를 지정하지 않으면, 모든 경로에 대해.처리
app.use(middle1)

//dog.start().jump().eat()

app.get('/', (req, res,next)=> {
    req.app.locals.message = 'Hello World'
    next()
})

app.get('/',(req,res) =>{
    req.app.locals.additionalmessage = 'swag'
    const message =  req.app.locals.message + req.app.locals.additionalmessage
    console.log(message)
    res.send(message)
})

app.listen(3000)
