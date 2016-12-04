import { Router } from "express";

import TpiService from "../../../tpi/logic/TpiService";

const tipSerivce = new TpiService();
const router = Router();

router.get("/", async (req, res) => {
    
    // check parameters 
    const from = parseInt(req.query.from);
    if (isNaN(from))
    {
        
        res.status(400).send(`"from" parameter must be a UTC number.`);
        return;
    }

    const to = parseInt(req.query.to);
    if (isNaN(to))
    {
        res.status(400).send(`"to" parameter must be a UTC number.`);
        return;
    }

    const results = await tipSerivce.getIndextByTimeRange(
        new Date(from),
        new Date(to)
    );
    res.send(results);
});


export default router;