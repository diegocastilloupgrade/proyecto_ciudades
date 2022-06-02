//Fichero de rutas de ciudades
const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/file');
const { isAuth } = require('../../middlewares/auth.middleware');
const {

    getAllCities,
    getCityByID,
    createCity,
    getCityByName,
    deleCiudad
} = require("../controllers/ciudades.controller");

router.get("/", getAllCities);
router.get("/:id", getCityByID);
router.post("/", upload.single("escudo"),createCity);
router.delete("/:id",deleCiudad)
router.get('/ciudad/:name', getCityByName);
router.post('/', upload.single("escudo"),createCity);
//router.post("/", upload.single(["escudo","bandera"]),createCity);
/*
router.post('/', upload.single('escudo'), upload.single('bandera'), createCity);
router.post(
  '/',
  upload.fields([
    { name: 'escudo', maxCount: 1 },
    { name: 'bandera', maxCount: 1 },
  ])
);
*/
module.exports = router;
