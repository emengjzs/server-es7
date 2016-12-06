import { Router } from "express";

import TpiService from "./../logic/TpiService";

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

    const maxAgeTime = 5 * 60;
    res.setHeader("Cache-Control", `max-age=${maxAgeTime}`);
    res.send(results);
});


export default router;