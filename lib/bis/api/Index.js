import { Router } from "express";

import BisService from "./../logic/BisService";

const bisSerivce = new BisService();
const router = Router();

router.get("/:lineId/:direction/speed", async (req, res) => {
    const rowcount = await bisSerivce.getSpeed();
    
    res.send(rowcount);
});


export default router;