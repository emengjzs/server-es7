import query  from "../../db/connection";

export default class BisService
{


    async getSpeed(lineId, direction)
    {
        const sql = `select * from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" limit 100`;
            console.log("ss");
        const result = await query(sql);
        console.log(result);
        return result;
    }
}