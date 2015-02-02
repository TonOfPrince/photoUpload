var express = require("express");
var multer  = require('multer');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var done = false;

//port
var port = 1111;

//ip
var ip = "127.0.0.1";

app.use(express.static(__dirname));

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return 'uploadedPhoto';
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    done = true;
  },
  onFileSizeLimit: function (file) {
    console.log('Failed: ', file.originalname)
    fs.unlink('./' + file.path) // delete the partially written file
  }
}));

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/display',function(req,res){
  if(done === true){
    console.log(req.files);
    if (!req.files.userPhoto) {
      res.redirect('/#/upload/');
    }
    if (req.files.userPhoto.size > 1000000) {
      res.redirect('/#/upload/size')
    } else if (req.files.userPhoto.mimetype === 'image/jpeg') {
      res.redirect('/#/display/JPG/'+req.files.userPhoto.originalname);
    } else if (req.files.userPhoto.mimetype === 'image/png') {
      res.redirect('/#/display/PNG/'+req.files.userPhoto.originalname);
    } else {
      res.redirect('/#/upload/type');
    }
    res.end("File uploaded.");
  }
});

//log where we are listening
console.log("Listening on http://" + ip + ":" + port);

app.listen(port, ip);

