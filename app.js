var ex = require('./lyrics.js');
var express = require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

var lyrics = ['song lyrics', 'singing song', 'this is a song'];

var selection = Math.floor(Math.random()*lyrics.length)

app.get('/', function(request, response){
  res.send(lyrics[selection]);
})

app.get('/api/lyrics', function (req, res) {
  res.send(lyrics);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
