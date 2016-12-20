let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

// Middleware that redirects to http://
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    // Redirect to http
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT);
});
