const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const cloudinary = require("cloudinary").v2;

//Importamos los routers

const CcaaRouter = require("./src/api/routes/animals.routes")
const CiudadRouter = require("./src/api/routes/continents.routes")

dotenv.config()

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const { connect } = require("./src/utils/database");

connect();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})

//CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  server.use(cors({
    origin: "*",
    credentials:true
}))


server.use("/ccaa",CcaaRouter)
server.use("/ciudad",CiudadRouter)

const PORT = process.env.PORT || 5000;

//RECUPERAMOS LA CLAVE SECRETA DEL DOTENV
const JWT_SECRET = process.env.JWT_SECRET