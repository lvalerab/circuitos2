"use strict";
    const Model = require("@elucidate/Model");
    class Credenciales extends Model{
      static get tableName() {
        return "PERM_CRED_CREDENCIALES";
      }

      static get jsonSchema() {
        return {
          type:"object",
          properties: {
            login:{type:"string",maxLength:255},
            password:{type:"string",maxLength:255},
            token:{type:"string",maxLength:255},
            activo:{type:"number"},
            maquina:{type:"number"}
          }
        }
      }
    }

    module.exports = Credenciales;