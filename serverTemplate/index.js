import "dotenv/config";
import express from "express";
import dbConnection from "./connections/dbConnection.js";
import router from "./routes/docsRoute.js";

const app = express();

const port = process.env.PORT;
const dbConnectionUri = process.env.MONGO_ATLAS_URI;

// middlewares
app.use("/api", router);
app.use(express.json());

// server
dbConnection(dbConnectionUri);
app.listen(port, () => {
  console.log(`server started http://localhost:${port}/home`);
});
