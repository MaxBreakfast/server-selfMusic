var userCtrl = require('./userController.js');

module.exports = function(app){
  app.post('/login', userCtrl.login)
}