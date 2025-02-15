import { Router } from "express";
import { abutPage, homepage } from "../controllers/docsController.js";
import {
  createUser,
  getAllUsers,
  loginUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", homepage);
router.get("/users", getAllUsers);
router.get("/about", abutPage);
router.post("/createUser", createUser);
router.post("/login", loginUser);
/////////secured routes///////////////

export default router;
