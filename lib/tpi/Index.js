import { Router } from "express";

const router = Router();

router.use((req, res, next) => {    
    console.log(`Clinent request to  "/api/**" has been intercepted`);
    next();
    return;
});

router.use("/api/tpi", require("./../tpi/api").default);

export default router;
