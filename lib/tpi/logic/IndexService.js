export default class IndexService
{

    async getIndexByTime(time)
    {
        const minutes = time.getHours() * 60 + time.getMinutes();
        const index = Math.abs(Math.sin((minutes * 24 /60) * 2 * Math.PI) * 7);
        return index;
    }

    async getIndextByTimeRange(from, to)
    {
        const results = [];
        const fromMinutes = from.getHours() * 60 + from.getMinutes();
        const toMinutes = to.getHours() * 60 + to.getMinutes();
        for (let i = fromMinutes; i <= toMinutes; i ++) 
        {
            results.push(await this._getIndexByMinutes(i));
        }
        return results;
    }


    async _getIndexByMinutes(minutes) 
    {
        const index = Math.abs(Math.sin((minutes * 24 /60) * 2 * Math.PI) * 7);
        return minutes;
    }
}