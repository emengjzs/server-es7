import express from "express";

const app = express();

app.attach = (function(httpService) {
    httpService.on("request", app);
});

app.detach = (function(httpService) {
    httpService.off("request", app);
});


app.use("/", require("./http/api").default);

export default app;