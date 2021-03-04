/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "APLI_TIEL_TIPO_ELEMENTOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_APLI_TIEL");
    table.uuid("APLI_UID").notNullable();
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relacion de tipos de elementos que contiene una aplicación");
    table.foreign("APLI_UID","FK_APLI_TIEL_APLI_APLI").references("APLI_APLI_APLICACION.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
