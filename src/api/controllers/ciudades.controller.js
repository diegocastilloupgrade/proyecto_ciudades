//controlador de ciudades
const City = require("../models/ciudad.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllCities = async (req, res, next) => {
  try {
    const allCities = await City.find().populate("ccaa");
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
    const cityByID = await City.findById(id).populate("ccaa");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      city: cityByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createCity = async (req, res, next) => {
  try {
    const newCity = new City(req.body);
    if (req.file){
      newCity.photo = req.file.path;
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

module.exports = { getAllCities, getCityByID, createCity };