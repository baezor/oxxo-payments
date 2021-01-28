var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('payments', {
    title: 'Pagos'
  });
});
router.get('/pago-creado', (req, res, next) => {
  res.render('paymentCreated', {
    'success': 'ok'
  })
})
router.post('/nuevo', function (req, res, next) {
  const name = req.body.name
  console.log('name: ', name)
  if (name) {
    res.redirect('/pagos/pago-creado')
  }
  res.end()
});

module.exports = router;