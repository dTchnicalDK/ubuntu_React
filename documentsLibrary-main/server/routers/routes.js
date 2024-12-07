import { Router } from "express";
import { upload } from "../utils/multureUtils.js";
import { createDoc, homepage } from "../controllers/fileContorollers.js";
const route = Router();

// routes
route.get("/home", homepage);
route.post("/upload", upload.single("docFile"), createDoc);

export default route;
