import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

config();

const app = express();

app.use(morgan("combined"));
app.get("/api", (_, res) => {
  res.send("API IFS for backend v1.0.0.");
});

app.listen(process.env.SR_PORT || 3333);
