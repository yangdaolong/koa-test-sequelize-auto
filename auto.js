const SequelizeAuto = require("sequelize-auto");

const env = process.env.NODE_ENV || "development";

const config = require(__dirname + "/../config/config.json")[env];

const auto = new SequelizeAuto(
  config.database, //数据库的库名
  config.username, //mysql数据库的用户名
  config.password, //mysql数据库的密码
  {
    host: config.host, // 数据库服务器ip
    dialect: config.dialect,
    directory: "./models", // prevents the program from writing to disk
    port: config.port, // 数据库运行端口
    additional: {
      timestamps: false,
    },
  }
);
auto.run(function (err) {
  if (err) throw err;
  // console.log(auto.tables); // table list
  // console.log(auto.foreignKeys); // foreign key list

  //生成models表后，直接执行项目
  require("./bin/www");
});

// url: jdbc:mysql://10.255.254.223:3308/new_cust_activity?serverTimezone=UTC&useSSL=false&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&allowMultiQueries=true
//         username: new_cust
//         password: newCustAct2020
