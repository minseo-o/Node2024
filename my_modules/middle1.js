const middle1 = (req, res, next) => {
    console.log('미들웨어 실행')

    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달 
    next()
}
//export와 뮤트 
module.exports = middle1;
