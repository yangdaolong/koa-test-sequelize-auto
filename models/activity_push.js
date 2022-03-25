const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_push', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cust_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单id",
      unique: "index_orderId"
    },
    activity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "活动id"
    },
    bind_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "绑券金额"
    },
    bind_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "标明 批次号和对应绑定数量的信息，json串。（applyId：礼券批次号，num：礼券数量，face：礼券面值）"
    },
    public_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "订阅类型 0:用户签收，1:礼券到账，2:订单创建"
    },
    order_money: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "订单金额"
    },
    push_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "消息推送ID"
    },
    push_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "推送时间"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    last_change_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_valid: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: 00,
      comment: "是否有效：0有效，-1订单取消"
    },
    order_confirm_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "确认收货时间"
    },
    platform: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "端"
    }
  }, {
    sequelize,
    tableName: 'activity_push',
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
      {
        name: "index_orderId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "create_ids",
        using: "BTREE",
        fields: [
          { name: "create_time" },
        ]
      },
      {
        name: "cust_ids",
        using: "BTREE",
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
};
