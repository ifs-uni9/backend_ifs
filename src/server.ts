import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config();

const app = express();

app.use(morgan("combined"));
app.get("/", function (req, res) {
  res.send("ok");
});

app.listen(process.env.SR_PORT || 3333);
