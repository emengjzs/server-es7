import httpService from "./lib/http/server";
import app from "./lib/app";

const port = 8000;

app.attach(httpService);

httpService.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})