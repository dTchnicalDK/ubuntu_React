import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";
import route from "./routers/routes.js";
import { mongodbConnection } from "./utils/mogodbConnection.js";

const port = 3000;
const dbConnectionString = process.env.MONGO_ATLAS_URI;
// console.log(process.env.CLOUD_NAME);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);

//dbconnection
mongodbConnection(dbConnectionString);
//server
app.listen(port, () => {
  console.log(`server started! http://localhost:${port}`);
});
