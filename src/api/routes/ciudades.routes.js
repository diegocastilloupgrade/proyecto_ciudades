//Fichero de rutas de ciudades
const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/file")

const { isAuth } = require("../../middlewares/auth.middleware");

const {
    getAllCities,
    getCityByID,
    createCity,
    deleCiudad
} = require("../controllers/ciudades.controller");
// 


router.get("/", getAllCities);
router.get("/:id", getCityByID);
router.post("/", upload.single("escudo"),createCity);
router.delete("/:id",deleCiudad)

module.exports = router;