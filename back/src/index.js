import express from "express";
import morgan from "morgan";
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
//Middlewares

//Routers
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
