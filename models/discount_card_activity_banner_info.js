const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_card_activity_banner_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    activity_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "活动名称"
    },
    banner_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "banner名称"
    },
    banner_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "banner链接"
    },
    platform_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "平台类型，0：全部（微信\/app），1：微信，2 APP"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "开始时间"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "结束时间"
    },
    is_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "是否删除，0：正常，1 删除"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    last_change_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后更新时间"
    }
  }, {
    sequelize,
    tableName: 'discount_card_activity_banner_info',
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
