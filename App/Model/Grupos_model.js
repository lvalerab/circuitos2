"use strict";
    const Model = require("@elucidate/Model");
const Usuario = require("./Usuario_model");
    class Grupos extends Model{
      static get tableName() {
        return "perm_grup_grupos";
      }

      static get  jsonSchema() {
        return {
          type:"object",
          required:["nombre"],
          properties: {
            UID:{type:"string",minLength:1, maxLength:36},
            nombre:{type:"string",minLength:1,maxLength:255},            
          }
        }
      }

      static relationMappings = {
        const Usario=require('./Usuario_model');
        usuarios: {
          relation:Model.ManyToManyRelation,
          modelClass:Usuario,
          join:{
            from:'perm_grup_grupos.UID',
            through:{
              from: 'perm_usgr_usua_grup.GRUP_UID',
              to: 'perm_usgr_usua_grup.USUA_UID'
            },
            to:'perm_usua_usuarios.UID'
          }
        }
      }
    }

    module.exports = Grupos;