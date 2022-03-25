const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_card_order_item', {
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
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品ID"
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品数量"
    },
    product_row: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品行号"
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "商品所属店铺id"
    },
    category_path: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "分类路径"
    },
    sell_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "商品出售金额"
    },
    pay_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "支付金额"
    },
    cancel_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "退货金额"
    },
    discount_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "先享卡优惠金额"
    },
    discount_cancel_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "先享卡扣款金额"
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
    tableName: 'discount_card_order_item',
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
