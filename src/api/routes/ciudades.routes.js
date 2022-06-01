//Fichero de rutas de ciudades
const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/file")

const { isAuth } = require("../../middlewares/auth.middleware");

const {
    getAllCities,
    getCityByID,
    createCity
} = require("../controllers/ciudades.controller");

router.get("/", getAllCities);
router.get("/:id", getCityByID);
router.post("/", upload.single("escudo"),createCity);

module.exports = router;