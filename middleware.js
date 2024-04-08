const express = require('express')
const app = express()
//미들웨어(함수)
const middle1 = (req, res, next) => {
    console.log('미들웨어 실행')

    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달 
    next()
}
//미들웨어 등록 use 모든  method (get post put delete 등등에 대해 처리 )
//arg로 경로를 지정하지 않으면, 모든 경로에 대해.처리
app.use(middle1)

app.get('/', (req, res)=> {
    res.send('Hello world')
})

app.listen(3000)
