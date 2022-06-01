const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const logger = require('morgan');
const cloudinary = require('cloudinary').v2;

dotenv.config();

const { connect } = require('./src/utils/database');

connect();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});



const server = express();
//USAMOS MORGAN PARA PODER VER UN LOG DE LAS PETICIONES QUE REALIZAMOS CUANDO ESTEMOS BAJO EL SCRIPT DEV
server.use(logger('dev'));

const PORT = process.env.PORT || 5000;

//Importamos los routers
const CcaaRouter = require('./src/api/routes/ccaa.routes');
const CiudadesRouter = require('./src/api/routes/ciudades.routes');
const UserRouter = require('./src/api/routes/user.routes');

//RECUPERAMOS LA CLAVE SECRETA DEL DOTENV
const JWT_SECRET = process.env.JWT_SECRET;

//CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//CORS
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

//CONFIGURAMOS LA CODIFICACION DE EXPRESS PARA RECIBIR INFORMACION EN JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//SETEAMOS LA CLAVE SECRETA QUE ME PIDE LA AUTENTICACION (EL LOGIN);
server.set('secretKey', JWT_SECRET);

//USAMOS LOS ROUTES
server.use('/ccaa', CcaaRouter);
server.use('/ciudades', CiudadesRouter);
server.use('/users', UserRouter);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
