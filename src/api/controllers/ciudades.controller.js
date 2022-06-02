//controlador de ciudades
const City = require("../models/ciudad.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Ciudad = require("../models/ciudad.model");

const getAllCities = async (req, res, next) => {
  try {
    const allCities = await City.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      cities: allCities,
    });
  } catch (error) {
    return next(error);
  }
};

const getCityByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cityByID = await City.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      city: cityByID,
    });
  } catch (error) {
    return next(error);
  }
};
const getCityByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const cityByName = await City.find({ name: name });
    return res.status(200).json(cityByName);
  } catch (error) {
    return next(error);
  }
};

const createCity = async (req, res, next) => {
  try {
    const newCity = new City(req.body);
    if (req.file) {
      newCity.escudo = req.file.path;
      newCity.bandera = req.file.path;
    }
    const createdCity = newCity.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      ciudad: createdCity,
    });
  } catch (error) {
    return next(error);
  }
};

const deleCiudad = async (req, res,next) => {
  try {
    const { id } = req.params;
    const deleteCiudad = await Ciudad.findByIdAndDelete(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      ciudad: deleteCiudad,
  })
  } catch (error) {
    return next(error)
  }

};

module.exports = { getAllCities, getCityByID, getCityByName, createCity,deleCiudad };