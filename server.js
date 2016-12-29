let express = require('express');
let app = express();
let spdy = require('spdy');
let path = require('path');
let fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}

spdy
    .createServer(options, app)
    .listen(PORT, (error) => {
      if (error) {
        console.error(error)
        return process.exit(1)
      } else {
        console.log('Listening on port: ' + PORT + '.')
      }
    });
