import { Router } from "express";
import { getAllMessage, sendMessage } from "../controllers/messageController";

const router: Router = Router();

router.post("/send", sendMessage);

router.get("/", getAllMessage);

export default router;
