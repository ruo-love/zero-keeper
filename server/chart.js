const Koa = require("koa");
const serve = require("koa-static");
const app = new Koa();
app.use(serve(staticPath));
app.listen(port, () => {
  console.log(`port: ${port}  server is running`);
});
