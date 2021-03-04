/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "CIRC_PAES_PASO_ESTADO";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("ESTA_INI_UID").notNullable();
    table.uuid("ESTA_FIN_UID").notNullable();
    table.primary(["ESTA_INICIAL_UID","ESTA_FINAL_UID"],"PK_CIRC_PAES");
    table.foreign("ESTA_INI_UID","FK_CIRC_PAES_CIRC_ESTA_INI").references("CIRC_ESTA_ESTADOS.UID");
    table.foreign("ESTA_FIN_UID","FK_CIRC_PAES_CIRC_ESTA_FIN").references("CIRC_ESTA_ESTADOS.UID");
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los pasos de estados entre los distintos circuitos (matrix)");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
