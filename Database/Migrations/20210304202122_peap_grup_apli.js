/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PEAP_GRAP_GRUP_APLI";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("");
    table.uuid("GRUP_UID");
    table.uuid("APLI_UID");
    table.uuid("PROC_UID").nullable();
    table.timestamps(true, true);
    table.foreign("GRUP_UID","FK_PEAP_GRAP_PERM_GRUP").references("PERM_GRUP_GRUPOS.UID");
    table.foreign("APLI_UID","FK_PEAP_GRAP_APLI_APLI").references("APLI_APLI_APLIACION.UID");
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relación de grupos para una aplicación concreta y un procedimiento en concreto");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
