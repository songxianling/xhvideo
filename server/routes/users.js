var axios = require('axios')
var express = require('express')
var router = express.Router()
var user = {
  name: 'xiangha',
  age: '7'
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/getUser', function (req, res, next) {
  console.log(req.query)
  res.send(user)
})

router.post('/getUser', function (req, res, next) {
  axios.post('http://www.baidu.com', req, () => {

  })
  console.log(req.body)
  next()
})

module.exports = router
