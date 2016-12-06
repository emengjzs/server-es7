import { Router } from "express";

const router = Router();

router.use("/", require("./../../tpi").default);

export default router;
