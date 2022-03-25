const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_dept', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(65),
      allowNull: false,
      comment: "部门名称"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "创建时间"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'activity_dept',
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
