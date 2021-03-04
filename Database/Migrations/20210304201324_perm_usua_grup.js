/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_USGR_USUA_GRUP";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("USUA_UID");
    table.uuid("GRUP_UID");     
    table.timestamps(true, true);
    table.primary(["USUA_UID","GRUP_UID"],"PK_PERM_USGR");
    table.foreign("USUA_UID","FK_PERM_USGR_PERM_USER").references("PERM_USUA_USUARIOS.UID");   
    table.foreign("GRUP_UID","FK_PERM_USGR_PERM_GRUP").references("PERM_GRUP_GRUPOS.UID");   
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relación de usuarios con sus grupos");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
