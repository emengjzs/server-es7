import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
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


});


export default router;