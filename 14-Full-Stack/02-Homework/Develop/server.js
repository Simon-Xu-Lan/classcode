// Requiring necessary npm packages
var express = require("express");
//Sessions store user data when accessing and browsing application. Allows applications to store state. For Example if I login, how the server remembers my activity is by my session.
//Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
//Express. js uses a cookie to store a session id (with an encryption signature) in the user's browser and then, on subsequent requests, uses the value of that cookie to retrieve session information stored on the server.
var session = require("express-session");

// Requiring passport as we've configured it
// Passport is Express-compatible authentication middleware for Node.js.
// Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies.
// The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.
// Passport uses the concept of strategies to authenticate requests. Strategies can range from verifying username and password credentials, delegated authentication using OAuth (for example, via Facebook or Twitter), or federated authentication using OpenID.
// Before authenticating requests, the strategy (or strategies) used by an application must be configured.
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
