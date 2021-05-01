import { config } from "dotenv";
import express from "express";

config();
const app = express();

app.listen(process.env.SR_PORT || 3333);
