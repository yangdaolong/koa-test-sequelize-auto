const router = require("koa-router")();

let db = require("../models/index");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  const [results, metadata] = await db.sequelize.query(
    "select u.id,u.user_name,r2.role_name from activity_sys_user u LEFT JOIN activity_sys_user_role r on u.id=r.user_id LEFT JOIN activity_sys_role r2 on r.role_id=r2.id"
  );
  console.log(results, metadata);
  ctx.body = results;
});

router.get("/json", async (ctx, next) => {
  db.activity_sys_user.hasMany(db.activity_sys_user_role, {
    foreignKey: "user_id",
    targetKey: "id",
  });

  db.activity_sys_user_role.belongsTo(db.activity_sys_role, {
    foreignKey: "role_id",
    targetKey: "id",
  });

  let data = await db.activity_sys_user.findAndCountAll({
    include: [
      {
        model: db.activity_sys_user_role,

        attributes: ["id", "role_id"],
        include: [
          {
            model: db.activity_sys_role,
            attributes: ["role_name"],
          },
        ],
      },
    ],
    attributes: ["id", "user_name"],
    where: {
      id: 43,
    },
  });

  ctx.body = data;
});

module.exports = router;
