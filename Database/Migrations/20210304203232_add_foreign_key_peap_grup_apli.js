/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PEAP_GRAP_GRUP_APLI";
exports.up = function (knex) {
  return knex.schema.alterTable(tableName, (table) => {
    table.foreign(["APLI_UID","PROC_UID"],"FK_PEAP_GRAP_APLI_PROP").references(["APLI_UID","UID"]).inTable("APLI_PROC_PROCEDIMIENTOS");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable(tableName,(table)=> {
    table.dropForeign("","FK_PEAP_GRAP_APLI_PROP");
  });
};
