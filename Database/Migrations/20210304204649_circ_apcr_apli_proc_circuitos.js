/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "CIRC_APCR_APLI_PROC_CIRCUITOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_CIRC_APCR");
    table.uuid("CIRC_UID").notNullable();
    table.uuid("APLI_UID").notNullable();
    table.uuid("PROC_UID").nullable();
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los circuitos de tramitación disponibles");
    table.foreign("CIRC_UID","FK_CIRC_APCR_CIRC_CIRC").references("CIRC_CIRC_CIRCUITOS.UID");
    table.foreign("APLI_UID","FK_CIRC_APCR_APLI_APLI").references("APLI_APLI_APLIACION.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
