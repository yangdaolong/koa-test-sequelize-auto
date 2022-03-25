const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_sys_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "角色名称"
    },
    role_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "角色等级"
    },
    role_desc: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "角色描述"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'activity_sys_role',
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
