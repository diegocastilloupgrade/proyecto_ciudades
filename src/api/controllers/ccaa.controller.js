//controlador de ccaa
const ccaa = require("../models/ccaa.model");

const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");

const getAllComunidades= async (req, res, next) => {
    try {
      const allComunidades = await ccaa.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        comunidades: allComunidades,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getComunidadesByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const comunidadByID = await ccaa.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        comunidad: comunidadByID,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createComunidad = async (req, res, next) => {
    try {
      const newComunidad = new ccaa(req.body);
      const createdComunidad = newComunidad.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        createdComunidad: newComunidad,
      });
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = { getAllComunidades, getComunidadesByID, createComunidad };