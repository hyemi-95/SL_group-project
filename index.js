const express = require('express')//express모듈을 설치해서 가져올수있다
const app = express()//평션을 이용해서 새로운 express를 만들고
const port = 5000//포트는 4000번으로 해도 무방

//몽고DB에 연결을 해보자 //셋째 줄은 에러가 나는 것을 방지하기 위해
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyemi:123400@cluster0.xfhdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
 // useNewUrlParser: true, useUnifedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err =>console.log(err))
 

app.get('/', (req, res) => { 
  res.send('Hello World!') //루트 디렉토리에 보면 hello wold를 출력되게 해준다
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //5000번 포트에서 이 앱을 실행하겠다.
})
