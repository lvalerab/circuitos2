/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "GENE_DUID_DICT_UID";
exports.up = function (knex) {
  return knex.schema.alterTable(tableName, (table) => {
    table.dropForeign("TELE_UID","FK_GENE_DUID_GENE_TELE");
    table.foreign("TELE_UID","FK_GENE_DUID_GENE_TELE").references("GENE_TELE_TIPO_ELEMENTOS.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTalble(tableName,(table)=> {
    table.dropForeign("TELE_UID","FK_GENE_DUID_GENE_TELE");
    table.foreign("TELE_UID","FK_GENE_DUID_GENE_TELE").references("APLI_APLI_APLICACION.UID");
  });
};
