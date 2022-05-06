import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import Posts from "./router/Posts.js";
import CusPro from "./router/CusPro.js";
import Item from "./router/Item.js";
import Promo from "./router/Promo.js";
import TraProf from "./router/TraProf.js";

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 400;
    ctx.body = {
      message: err.message,
    };
  }
});

app.use(Posts.routes()).use(Posts.allowedMethods());
app
  .use(CusPro.routes())
  .use(CusPro.allowedMethods());
app.use(Item.routes()).use(Item.allowedMethods());
app.use(Promo.routes()).use(Promo.allowedMethods());
app.use(TraProf.routes()).use(TraProf.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = `<h3>Not Found</h3>`;
  ctx.status = 404;
});

app.listen(3000, () => {
  console.log("Application running on port 3000");
});

// http://localhost:3000/
