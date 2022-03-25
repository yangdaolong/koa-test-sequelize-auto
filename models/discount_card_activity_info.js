const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_card_activity_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    activity_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "活动名称"
    },
    activity_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "活动页面标题"
    },
    activity_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "活动类型，默认为0，预留字段"
    },
    platform_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "平台类型，0：全部，1:微信小程序"
    },
    category_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "分类路径，英文逗号隔开"
    },
    shop_ids: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "参与活动的店铺id，自营：0"
    },
    template_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "模板ID"
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "公众号账户ID"
    },
    wechat_credit_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "微信支付分"
    },
    keep_day_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "履约天数"
    },
    keep_order_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "履约订单数"
    },
    keep_total_amount: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "履约总金额"
    },
    keep_order_price: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      comment: "履约单价"
    },
    card_discount: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      primaryKey: true,
      comment: "先享卡折扣"
    },
    card_limit_take_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "开卡张数限制"
    },
    product_page_tag: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "单品页促销标签"
    },
    product_page_msg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "单品页促销文案"
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
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "是否删除，0：正常启用，1 停用"
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
    },
    creator: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "发布人"
    },
    editor: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "最后修改人"
    }
  }, {
    sequelize,
    tableName: 'discount_card_activity_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "card_discount" },
        ]
      },
    ]
  });
};
