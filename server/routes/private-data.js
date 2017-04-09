var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require("../firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-luke-basemode.firebaseio.com"
});

router.get('/', function(req, res){
  console.log(req.decodedToken); // Here you can see the information firebase gives you about the user
  res.send("Secret DATA!!! You got it!!! Great work " + req.decodedToken.name + "!!!");
});

module.exports = router;
