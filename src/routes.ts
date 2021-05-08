import { Router } from "express";
import jwt from "jsonwebtoken";
import authenticate from "@middlewares/authMiddleware";

const routes = Router();

routes.get("/api", (_, res) => {
  res.send("API IFS for backend v1.0.0.");
});

routes.post("/auth",(req, res) => {
  const { username } = req.body;

  const token = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);

  return res.status(200).json({
    code: 200,
    message: "Successfully logged in!",
    token
  });
});

routes.get("/product", authenticate, (req, res) => {
  return res.sendStatus(200);
})

export default routes;
