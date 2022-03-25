const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_sys_role_perm', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "角色ID"
    },
    perm_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "权限ID"
    }
  }, {
    sequelize,
    tableName: 'activity_sys_role_perm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
