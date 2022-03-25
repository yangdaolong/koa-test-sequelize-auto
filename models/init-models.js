var DataTypes = require("sequelize").DataTypes;
var _activity_dept = require("./activity_dept");
var _activity_info = require("./activity_info");
var _activity_push = require("./activity_push");
var _activity_sys_monitor = require("./activity_sys_monitor");
var _activity_sys_perm = require("./activity_sys_perm");
var _activity_sys_role = require("./activity_sys_role");
var _activity_sys_role_perm = require("./activity_sys_role_perm");
var _activity_sys_user = require("./activity_sys_user");
var _activity_sys_user_role = require("./activity_sys_user_role");
var _discount_card_activity_banner_info = require("./discount_card_activity_banner_info");
var _discount_card_activity_info = require("./discount_card_activity_info");
var _discount_card_order = require("./discount_card_order");
var _discount_card_order_item = require("./discount_card_order_item");
var _discount_card_receive_info = require("./discount_card_receive_info");

function initModels(sequelize) {
  var activity_dept = _activity_dept(sequelize, DataTypes);
  var activity_info = _activity_info(sequelize, DataTypes);
  var activity_push = _activity_push(sequelize, DataTypes);
  var activity_sys_monitor = _activity_sys_monitor(sequelize, DataTypes);
  var activity_sys_perm = _activity_sys_perm(sequelize, DataTypes);
  var activity_sys_role = _activity_sys_role(sequelize, DataTypes);
  var activity_sys_role_perm = _activity_sys_role_perm(sequelize, DataTypes);
  var activity_sys_user = _activity_sys_user(sequelize, DataTypes);
  var activity_sys_user_role = _activity_sys_user_role(sequelize, DataTypes);
  var discount_card_activity_banner_info = _discount_card_activity_banner_info(sequelize, DataTypes);
  var discount_card_activity_info = _discount_card_activity_info(sequelize, DataTypes);
  var discount_card_order = _discount_card_order(sequelize, DataTypes);
  var discount_card_order_item = _discount_card_order_item(sequelize, DataTypes);
  var discount_card_receive_info = _discount_card_receive_info(sequelize, DataTypes);


  return {
    activity_dept,
    activity_info,
    activity_push,
    activity_sys_monitor,
    activity_sys_perm,
    activity_sys_role,
    activity_sys_role_perm,
    activity_sys_user,
    activity_sys_user_role,
    discount_card_activity_banner_info,
    discount_card_activity_info,
    discount_card_order,
    discount_card_order_item,
    discount_card_receive_info,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
