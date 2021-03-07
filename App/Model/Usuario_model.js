"use strict";
    const Model = require("@elucidate/Model");
    class Usuario extends Model{
      static get tableName() {
        return "perm_usua_usuarios";
      }

      static get jsonSchema() {
        return {
          type:"object",
          required:["nombre","email"],
          properties: {
            UID:{type:"string",minLength:1, maxLength:36},
            nombre:{type:"string",minLength:1,maxLength:255},
            apellido1:{type:"string",maxLength:255},
            apellido2:{type:"string",maxLength:255},
            email:{type:"string",maxLength:255},
            telefono:{type:"string",maxLength:30}
          }
        }
      }

      static relationMappings = {
        const Grupo=require('./Grupos_model');
        const Credencial=require('./Credenciales_model');
        grupos: {
          relation:Model.ManyToManyRelation,
          modelClass:Grupo,
          join:{
            from:'perm_usua_usuarios.UID',
            through:{
              from: 'perm_usgr_usua_grup.USUA_UID',
              to: 'perm_usgr_usua_grup.GRUP_UID'
            },
            to:'perm_grup_grupos.UID'
          }
        },
        credenciales:{
          relation:Model.HasManyRelation,
          modelClass:Credencial,
          join: {
            from:"perm_usua_usuarios.UID",
            to:"PERM_CRED_CREDENCIALES.USER_UID"
          }
        }
      }
    }

    module.exports = Usuario;