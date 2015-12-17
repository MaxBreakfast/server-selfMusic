
module.exports = function(app, express, passport, credentials) {
  app.get('/', function(req, res) {
    res.send('hello world ');
  });
  app.get('/info', function(req, res) {
    res.send(credentials);
  });

  app.get('/auth/spotify',
    passport.authenticate('spotify'),
    function(req, res) {
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    });

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify', {
      failureRedirect: '/'
    }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/info');
    });
}
