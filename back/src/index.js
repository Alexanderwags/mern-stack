import express from "express";
import morgan from "morgan";
import router from "./routes/task";
import path from "path";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//static files
app.use(express.static(path.join(__dirname, "public")));
//Routers
app.use("/api/tasks", router);
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
