const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
    
app.get('/', function(req, res) {
    // res.sendFile("index.html");
    res.sendFile("index.html");
});
    
app.listen(process.env.PORT || 3000, function() {
    console.log("App is running on port " + process.env.PORT || 3000);
})