var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
// 跨域支持
app.all('*', (req, res, next) => {
  const origin = req.headers.origin
  res.header('Access-Control-Allow-Origin', origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')

  next()
})
// 注册users接口
var users = require('./routes/users')
app.use('/users', users)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')))

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})

// 监听
app.listen(7777, function () {
  console.log('success listen...7777')
})
