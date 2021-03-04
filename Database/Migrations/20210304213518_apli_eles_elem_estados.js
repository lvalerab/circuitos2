/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "APLI_ELES_ELEM_ESTADOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_APLI_ELES");
    table.uuid("ELEM_UID");
    table.uuid("ELES_SIGU_UID").nullable();
    table.uuid("USUA_UID");
    table.uuid("ESTA_UID");
    table.datetime("fecha");
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena el historial de estados de un elemento dado");
    table.foreign("ELEM_UID","FK_APLI_ELES_APLI_ELEM").references("APLI_ELEM_ELEMENTOS.UID");
    table.foreign("ELES_SIGU_UID","FK_APLI_ELES_APLI_ELES").references("APLI_ELES_ELEM_ESTADOS.UID");
    table.foreign("USUA_UID","FK_APLI_ELES_PERM_USUA").references("PERM_USUA_USUARIOS.UID");
    table.foreign("ESTA_UID","FK_APLI_ELES_CIRC_ESTA").references("CIRC_ESTA_ESTADOS.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
