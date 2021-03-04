/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_GRPR_GRUP_PERM";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("PERM_UID").notNullable();
    table.uuid("GRUP_UID").notNullable();
    table.uuid("ESTA_UID").notNullable();
    table.primary(["PERM_UID","GRUP_UID","ESTA_UID"],"PK_PERM_GRPR");
    table.foreign("PERM_UID","FK_PERM_GRPR_PERM_PERM").references("PERM_PERM_PERMISOS.UID");
    table.foreign("GRUP_UID","FK_PERM_GRPR_PERM_GRUP").references("PERM_GRUP_GRUPOS.UID");
    table.foreign("ESTA_UID","FK_PERM_GRPR_CIRC_ESTA").references("CIRC_ESTA_ESTADOS.UID");
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relación de permisos con los grupos y los estados");
    table.foreign("CAPE_UID","FK_PERM_PERM_PERM_CAPE").references("PERM_CAPE_CATEGORIA_PERMISO.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
