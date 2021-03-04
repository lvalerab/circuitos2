/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "APLI_PROC_PROCEDIMIENTOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_APLI_PROC");
    table.uuid("APLI_UID").notNullable();
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relación de procedimientos que posee una aplicación suscrita");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
