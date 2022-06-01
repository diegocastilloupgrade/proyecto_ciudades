const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

//Importamos los routers

dotenv.config()

const { connect } = require("./src/utils/database");
connect();

const PORT = process.env.PORT || 5000;

//RECUPERAMOS LA CLAVE SECRETA DEL DOTENV
const JWT_SECRET = process.env.JWT_SECRET