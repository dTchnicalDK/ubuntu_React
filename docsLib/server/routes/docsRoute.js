import { Router } from "express";
import { abutPage, homepage } from "../controllers/docsController.js";

const router = Router();

router.get("/home", homepage);
router.get("/about", abutPage);

export default router;
