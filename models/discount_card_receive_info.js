const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_card_receive_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "自增主键"
    },
    cust_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "用户ID"
    },
    card_template_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "先享卡模板ID"
    },
    openid: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "用户标识"
    },
    card_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "卡ID"
    },
    appid: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "公众账号"
    },
    mchid: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "商户号"
    },
    activity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "活动ID"
    },
    out_card_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "商户领卡号"
    },
    target_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "履约目标订单数量"
    },
    order_nums: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "履约订单数量"
    },
    refund_amount: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "用户违约退回的优惠金额,单位为：元，保留两位小数"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "开卡状态（0预开卡，1约定进行中，2约定到期核对中，3完成约定，4未完成约定，5注销）"
    },
    creation_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    last_changed_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后更新时间"
    },
    begin_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "约定开始时间"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "约定结束时间"
    }
  }, {
    sequelize,
    tableName: 'discount_card_receive_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "activity_id" },
        ]
      },
    ]
  });
};
