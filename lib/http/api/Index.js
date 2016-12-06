import { Router } from "express";

const router = Router();

router.use((req, res, next) => {    
    console.log(`Clinent request to  "/api/**" has been intercepted`);
    next();
    return;
});

router.use("/api/tpi", require("./../../tpi/api").default);
router.use("/api/bis", require("./../../bis/api").default);

export default router;
