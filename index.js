import httpService from "./lib/http/server";

const port = 8000;
httpService.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
})