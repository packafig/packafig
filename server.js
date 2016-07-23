
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static(path.join(__dirname, './client/')));
app.use(bodyParser.json());
app.post('/', function(req, res) {

    fs.writeFile(__dirname + "/client/data.js", JSON.stringify("module.exports = " + JSON.stringify(req.body)));

// filePath = __dirname + './client/data.txt'
// req.on('data', function(data) {
//     body += data;
// });
// req.on('end', function() {
//     console.log(body)
//     fs.appendFile(filePath, body, function() {
//         res.end()
//     })
// })
})

app.listen(3000);
