//fichero de rutas de CCAA
const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/file")
const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAllComunidades,
  getComunidadesByID,
  createComunidad,
} = require("../controllers/ccaa.controller");

router.get("/", getAllComunidades);
router.get("/:id", getComunidadesByID);
router.post("/", upload.single("bandera"),createComunidad);

module.exports = router;
