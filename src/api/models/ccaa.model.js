const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CcaaSchema  = new Schema (
      {
       name: {type: String,required: true},
       poblacion: {type: String,required: true},
       capital: {type: String,required: true},
       escudo: {type: String,required: false},
       bandera: {type: String,required: false},
       
    },
    {timestamps: true}
    );



const Ccaa = mongoose.model("Ccaa", CcaaSchema);

module.exports = Ccaa; 