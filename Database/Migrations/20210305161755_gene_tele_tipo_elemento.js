/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "GENE_TELE_TIPO_ELEMENTOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_GENE_TELE");
    table.string("tabla",255);
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los tipos de datos almacenados en la aplicación");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
