var express = require('express'),
promise = require('bluebird'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
User = require('./models/User');
routes = require('./routes/')

// promisify libraries as needed
var bcrypt = promise.promisifyAll(require('bcrypt'));

// connect to the databse
var connectStr = "mongodb://localhost:27017";
mongoose.set('useCreateIndex', true)
mongoose.connect(connectStr, { useNewUrlParser: true }, function(err) {
  if (err) throw err;
  console.log("Successfully connected to Mongodb");
})

var app = express();
// all the middleware
app.use(bodyParser.json()) // for parsing incoming data
app.use(bodyParser.urlencoded({ extended: false }));

// addd express-session method?
app.use(require('express-session')({
  secret: "Hello World",
  resave: false,
  saveUninitialized: false
}));

// logging the time and request type
app.use(function (req, res, next) {
  console.log(`[${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}] \
  ${req.method} ${req.url} `);
  next();
})

// the routes
const router = express.Router()
routes(router)
app.use('/api', router)

// start the server at port
let port = 8000 || process.env.PROT
app.listen(port, () => {
  console.log(`Server started at port : ${port}`)
})
