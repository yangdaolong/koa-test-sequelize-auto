const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    activity_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "活动名称"
    },
    activity_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "活动类型，默认为0全额反券，1首单返券"
    },
    platform_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "平台类型，0：全部，1：app,2：微信小程序，3：百度小程序，4：快应用，5：拼多多小程序"
    },
    category_path: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "分类id，英文逗号隔开"
    },
    shop_ids: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "有效店铺id，英文逗号隔开"
    },
    apply_ids: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "活动礼券，每个礼券以逗号隔开"
    },
    apply_upper_amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true,
      comment: "礼券金额上限（首单返券类型无礼券金额项，该项为-1），单位\/元"
    },
    is_valid: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "礼券是否生效，-1:未生效，1:生效"
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
      comment: "是否删除：0：未删除，1：已删除"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    last_change_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后一次修改时间"
    }
  }, {
    sequelize,
    tableName: 'activity_info',
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
