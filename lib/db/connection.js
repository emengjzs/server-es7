import config from "config";
import hdb from "hdb";

let connection = null;

function getConnection()
{
    if (! connection)
    {
        connection = hdb.createClient(config.db.connection);
        connection.on("error", error => {
            console.err("cannot connect db server");
        });
    }

    return new Promise((resolve, reject) => {
        if (connection.readyState === "connected")
        {
            resolve(connection);
        }
        connection.connect( error => {
            if (error)
            {
                console.log(error);
                reject(error);
            }
            else
            {
                resolve(connection);
            }
        });
        
    })

}


async function query(command)
{
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        
        connection.exec(command, (err, rows) => {
            if (err) 
            {
                console.log(err);
                reject(err);
            }
            else{
                resolve(rows);
            }
        })
    });
}

export default query;
    