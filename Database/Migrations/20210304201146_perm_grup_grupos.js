/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_GRUP_GRUPOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PERM_GRUP");
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Tabla con los distintos grupos de usuario que tiene la aplicación");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
