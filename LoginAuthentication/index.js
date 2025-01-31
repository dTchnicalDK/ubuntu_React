import "dotenv/config";
import express from "express";
import dbConnection from "./connections/dbConnection.js";
import router from "./routes/docsRoute.js";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT;
const dbConnectionUri = process.env.MONGO_ATLAS_URI;

// middlewares
app.use(express.json());

//routes
app.use("/api", router);

// server
dbConnection(dbConnectionUri);
app.listen(port, () => {
  console.log(`server started http://localhost:${port}/api/home`);
});
