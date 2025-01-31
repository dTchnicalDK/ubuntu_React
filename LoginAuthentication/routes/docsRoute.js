import { Router } from "express";
import { abutPage, homepage } from "../controllers/docsController.js";
import { createUser } from "../controllers/userController.js";

const router = Router();

router.get("/home", homepage);
router.get("/about", abutPage);
router.post("/createUser", createUser);

export default router;
