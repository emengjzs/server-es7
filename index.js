import config from "config";
import express from "express";

import httpService from "./lib/http/server";
import app from "./lib/app";



(function main()
{
    checkEnvironment();
    startHttpServer();
})();


function startHttpServer()
{
    const port = parseInt(config.get("http.port"));

    if (isNaN(port))
    {
        throw new Error(`"http.port" must be specified as an Integer`);
    }

    app.attach(httpService);

    httpService.listen(port, () => {
        console.log(`server is now listening on port ${port}`);
    });
}


function checkEnvironment()
{
    const env = app.get("env");
    console.log(`Server is now started in ${env}`);

    if ( env === "development")
    {
        app.use(express.static("public"));
    }
    else 
    {
        throw new Error(`Unsupport deployment mode ${env}`);
    }
}


