const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_sys_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "用户名"
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "手机号"
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "用户邮箱"
    },
    dept_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "部门ID"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "状态 0正常，1 停用"
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
    tableName: 'activity_sys_user',
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
