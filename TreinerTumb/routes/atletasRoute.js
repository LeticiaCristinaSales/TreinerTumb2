var express = require('express');
var router = express.Router();
var atletaModel = require("../models/atletasModel"); 


router.get("/", async function(req, res, next) {
  let result = await atletaModel.getAll();
  res.status(result.status).send(result.data);
});


router.get('/:id', async function(req, res, next) {
  let atl_id = req.params.id; 
  let result = await atletaModel.getOne(atl_id);
  res.status(result.status).
     send(result.data);
});


router.post('/', async function(req, res, next) {
  let atl = req.body; 
  let result = await atletaModel.saveAtleta(atl);
  res.status(result.status).send(result.data);
});

router.put("/:id/",async function(req,res,next) {
  let id = req.params.id;
  let data = req.body;
  let result = await atletaModel.editAtleta(id,data);
  res.status(result.status).send(result.data);
});

router.delete('/:id',async function(req,res,next) {
  let id = req.params.id;
  let result = await atletaModel.deleteAtleta(id);
  res.status(result.status).send(result.data);
});
module.exports = router;


//Um objeto que contém valores de parâmetros analisados ​​no caminho da URL
//mantém parâmetros enviados pelo cliente como parte de uma solicitação POST