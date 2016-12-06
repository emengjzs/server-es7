import query  from "../../db/connection";

export default class BisService
{


    async getBusLineInfo(lineId, direction)
    {
        const sql = `select 
                        lineStop."STOP_ID`
    }

    async getSpeed(lineId, direction)
    {
        const sql = `select * from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" 
        where LINE_ID=? and DIRECTION=? limit 100`;
        const result = await query(sql, [lineId, direction]);
        console.log(result);
        return result;
    }
}