import { Router } from "express";
import { abutPage, homepage } from "../controllers/docsController.js";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = Router();

router.get("/", homepage);
router.get("/users", getAllUsers);
router.get("/about", abutPage);
router.post("/createUser", createUser);

export default router;
