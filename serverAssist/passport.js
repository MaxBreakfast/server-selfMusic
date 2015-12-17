var config = require('../config/api.config.json');

var SpotifyStrategy = require('../node_modules/passport-spotify/lib/passport-spotify/index').Strategy;

var client_id = config.Spotify.client_id;
var client_secret = config.Spotify.client_secret;
// var str = 'nada';
var credentials = {};


module.exports.passportInit = function(app, passport) {
  app.use(passport.initialize());
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new SpotifyStrategy({
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: "http://localhost:8888/auth/spotify/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      credentials.accessToken = accessToken;
      credentials.refreshToken = refreshToken;
      credentials.profile = profile;
      // str = 'accessToken ' + accessToken + '\nrefreshToken ' + refreshToken + '\nprofile ' + profile;
      // console.log(str)
      return done(null, profile);
    }
  ));
};

module.exports.credentials = credentials;

