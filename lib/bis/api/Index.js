import { Router } from "express";

import BisService from "./../logic/BisService";

const bisSerivce = new BisService();
const router = Router();

router.get("/:lineId/:direction/speed", async (req, res) => {

    
    const rows = await bisSerivce.getSpeed(req.params.lineId, req.params.direction);
    
    res.send(rows);
});


export default router;