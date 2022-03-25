const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_sys_perm', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "父节点id"
    },
    perm_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "权限名称"
    },
    perm_val: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "权限值"
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "url路径"
    },
    perm_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "类型 0 菜单，1 页面，2 按钮，3 接口"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "顺序"
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
    tableName: 'activity_sys_perm',
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
