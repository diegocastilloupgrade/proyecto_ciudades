//Fichero de rutas de ciudades
const express = require("express");
const router = express.Router();

const { isAuth } = require("../../middlewares/auth.middleware");

const {
    getAllCities,
    getCityByID,
    createCity
} = require("../controllers/ciudades.controller");

router.get("/", getAllCities);
router.get("/:id", getCityByID);
router.post("/", [isAuth], createCity);

module.exports = router;