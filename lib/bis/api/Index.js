import { Router } from "express";

import BisService from "./../logic/BisService";

const bisSerivce = new BisService();
const router = Router();

router.get("/bus-line/:lineId-:direction", async (req, res) => {

    const { lineId, direction } = req.params;
    if (isNaN(lineId))
    {
        res.status(400)
        .json({
            isSuccess: false,
            message: `The parameter "lineId" must be a Integer`,
        });
        return;
    }

    if (isNaN(direction))
    {
         res.status(400)
        .json({
            isSuccess: false,
            message: `The parameter "direction" must be a Integer`,
        });
        return;
    }

    // get data from service
    const busLineDataRows = await bisSerivce.getSpeed(req.params.lineId, req.params.direction);
    
    // render
    const busLineList = [lineId, direction];
    for (let busDataRow of busLineDataRows)
    {
        busLineList.push([busDataRow.STOP_ID, busDataRow.LAT, busDataRow.LNG]);
    }

    // add client Cache
    const maxAge = 300;
    res.setHeader("Content-Type", "application/json");
    res.json({
        isSuccess: true,
        data: busLineList
    });
});


export default router;