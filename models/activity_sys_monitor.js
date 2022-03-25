const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_sys_monitor', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "业务名称"
    },
    service_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "业务描述"
    },
    cost_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "业务耗时（单位：ms）"
    },
    exception_msg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "异常信息"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    }
  }, {
    sequelize,
    tableName: 'activity_sys_monitor',
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
