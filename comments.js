// create web server
const express = require('express');
const app = express();
// create logger
const logger = require('./logger');
// use logger
app.use(logger);
// create middleware for comments
app.use('/comments', (req, res) => {
  res.send('comments');
});
// create middleware for products
app.use('/products', (req, res) => {
  res.send('products');
});
// listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: logger.js
// create middleware function
function logger(req, res, next) {
  console.log('Logging...');
  next();
}
// export middleware
module.exports = logger;
```

## 3.4. Built-in middleware

Built-in middleware functions are functions that are bundled with Express. They are functions that are available through the express module. We can use them without installing any third-party modules. Here is a list of some of the built-in middleware functions:

- express.static() - Serves static assets such as HTML files, images, and so on.
- express.json() - Parses incoming requests with JSON payloads. The result is available in req.body.
- express.urlencoded() - Parses incoming requests with URL-encoded payloads. The result is available in req.body.

## 3.5. Third-party middleware

Third-party middleware functions are functions that are not bundled with Express. They are functions that are available through third-party modules. We can use them by installing the third-party modules that contain them. Here is a list of some of the third-party middleware functions:

- cookie-parser - Parses Cookie header and populates req.cookies with an object keyed by the cookie names.
- multer - Parses multipart/form-data.

## 3.6. Application-level middleware

Application-level middleware functions are middleware functions that are bound to an instance of the app object. We can use app.use() and app.METHOD() to bind application-level middleware functions to an instance of the app object. Here is an example of application-level middleware:

```js
const express = require('express');
const app = express();
// application-level middleware
app.use((req, res, next) => {
  console.log('Logging...');
  next();
});
app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/users', (req, res) => {
  res.send('Users');