import express from "express";

const app = express();

app.listen(process.env.SR_PORT || 3333);
