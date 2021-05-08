import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes";

config();

const app = express();

app.use(morgan("combined"));
app.use(express.json())
app.use(routes);

app.listen(process.env.SERVER_PORT || 3333);
