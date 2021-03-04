/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "APLI_ELEM_ELEMENTOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_APLI_ELEM");
    table.uuid("TIEL_UID").notNullable();
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los identificadores de elementos de una aplicación dada");
    table.foreign("TIEL_UID","FK_APLI_ELEM_APLI_TIEL").references("APLI_TIEL_TIPO_ELEMENTOS.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
