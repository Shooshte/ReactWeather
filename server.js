let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

// Middleware that redirects to http://
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    // Redirect to http
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT);
});
