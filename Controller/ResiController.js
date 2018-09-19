var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require(__root + 'Controller/VerifyToken');
var moment = require('moment');
var Resi = require(__root + 'Model/Resi');


router.post('/', function (req, res) {


  Resi.create({
    idUser: req.userId,
    step: req.body.step,
    heartRate: req.body.heartRate,
    sistol: req.body.sistol,
    diastol: req.body.diastol,
    sleep: req.body.sleep,
    bloodOxygen: req.body.bloodOxygen
  }, function (err, record) {
    if (err) return res.status(500).send("Error saat menyimpan record.");
    res.status(200).send(record);
  });

});


router.get('/', VerifyToken, function (req, res) {

  console.log(req.userId);
  Record.find({ idUser: req.userId }, function (err, records) {
    if (err) return res.status(500).send("Internal server Error");
    // if (!user) return res.status(404).send("user record not found");
    res.status(200).send(records);
  });


});

module.exports = router;