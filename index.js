import httpService from "./lib/http/server";
import app from "./app";

const port = 8000;

httpService.on("request", app);

httpService.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})