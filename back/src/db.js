import mongoose from "mongoose";
const URI = "mongodb://localhost/mern-tasks";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => {
    console.log(" DB is  conected");
  })
  .catch((err) => console.log(err));

export default mongoose;
