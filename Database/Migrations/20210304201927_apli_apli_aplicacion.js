/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "APLI_APLI_APLICACION";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_APLI_APLI");
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena las distintas aplicaciones suscritas");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
