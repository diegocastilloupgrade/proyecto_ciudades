const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CiudadSchema  = new Schema (
      {
       name: {type: String,required: true},
       poblacion: {type: String,required: true},
       capital: {type: String,required: true},
       extension: {type: String,required: false},
       escudo: {type: String,required: false},
       bandera: {type: String,required: false},
       comunidad autonoma: {type: String,required: true},
    },
    {timestamps: true}
    );

const Ciudad = mongoose.model("ciudad", CiudadSchema);

module.exports = Ciudad; 