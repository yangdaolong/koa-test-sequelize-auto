const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_card_order', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "自增主键"
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单id"
    },
    cust_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "用户id"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品所属店铺id"
    },
    from_platform: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "来源平台"
    },
    sale_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "收订销售金额"
    },
    bargin_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "支付金额"
    },
    order_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "订单类型"
    },
    order_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "订单状态"
    },
    payment_method_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "支付方式"
    },
    payment_pay_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "支付时间"
    },
    create_order_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单创建时间"
    },
    send_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出库时间"
    },
    creation_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    last_changed_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'discount_card_order',
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
