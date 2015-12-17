var userCtrl = require('./userController');

module.exports = function(app){
  app.post('/login', userCtrl.login)
}