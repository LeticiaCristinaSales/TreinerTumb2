var express = require('express');
var router = express.Router();
var provaModel = require("../models/provasModels"); 

router.get("/", async function(req, res, next) {
    let result = await provaModel.getAll();
    res.status(result.status).send(result.data);
  });

  module.exports = router;