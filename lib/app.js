import express from "express";

const app = express();

app.attach = (function(httpService) {
    httpService.on("request", app);
});

app.detach = (function(httpService) {
    httpService.off("request", app);
});


app.use(express.static("public"));


export default app;