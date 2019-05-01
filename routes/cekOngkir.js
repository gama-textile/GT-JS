const express = require("express");
const router = express.Router();
var http = require("https");
const { init } = require("rajaongkir-node-js");
const request = init("0cbb08180c15e7b79c3cc1eddda5d06e", "starter");
//const RajaOngkir = require('rajaongkir-nodejs').Starter('API KEY');

router.get("/provinsi", function(req, res) {
  const province = request.get("/province");
  province.then((prov) => {
    let js = JSON.parse(prov);
    res.send(js);
  });

  // RajaOngkir.getProvinces().then(function (result) {
  //     res.json(result);
  // }).catch(function (error) {
  //     console.log(error);
  // });
});

router.get("/kota/:id", function(req, res) {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);
  allCityInProvince.then((city) => {
    let citi = JSON.parse(city);
    res.send(citi);
  });

  // RajaOngkir.getCities().then(function (result) {
  //     res.json(result);
  // }).catch(function (error) {
  //     console.log(error);
  // });
});

router.post("/ongkir", function(req, res) {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier // bisa merequest satu atau beberapa kurir sekaligus
  };
  const cost = request.post("cost", data);
  cost.then((cst) => {
    // let cekOngkir = JSON.parse(cst);
    res.send(cst);
    // console.log(cst);
  });
});

module.exports = router;
