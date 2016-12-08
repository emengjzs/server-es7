import query  from "../../db/connection";

export default class BisService
{

    constructor()
    {
        this._busLineCache = new Map();
    }


    async getBusLineInfo(lineId, direction, language)
    {


        const rows = await query(
            `select
                lineStop."STOP_ID",
                "STOP_NAME",
                "LAT",
                "LNG",
                "SEQ_NO"
            from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" lineStop
            inner join "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.STOP_NAME_T" stopName on
                lineStop."STOP_ID"=stopName."STOP_ID"
            where "LINE_ID"=? and "DIRECTION"=? and "LANGU"=?
            order by "SEQ_NO"`,
            [
                lineId,
                direction,
                language
            ]
        );
        return rows;
    }

    async getSpeed(lineId, direction)
    {

        const results = await this._getSpeedFromCache(lineId, direction);
        return results;
        
    }

    async _getSpeedFromCache(lineId, direction)
    {   
        let busLineData = this._busLineCache.get(`${lineId}-${direction}`)
        if (busLineData === undefined)
        {
            console.log(`Cache Data BusLineInfo ${lineId}-${direction} Miss`)
            {
                const results = await this._getSpeedFromDB(lineId, direction);
                this._busLineCache.set(`${lineId}-${direction}`, results);
                return results;
            }
        }
        else 
        {
            console.log(`Return cache Data BusLineInfo ${lineId}-${direction}`);
            return busLineData;
        }
    }

    async _getSpeedFromDB(lineId, direction)
    {
        const sql = `select * from "SAP_ITRAFFIC_DEMO"."sap.traffic.demo.ptm.s.db::BUS.GIS_EXT.LINE_STOP" 
        where LINE_ID=? and DIRECTION=? limit 100`;
        const result = await query(sql, [lineId, direction]);
        return result;
    }
    
}