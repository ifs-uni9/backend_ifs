import { Router } from "express";
import authenticate from "@middlewares/authMiddleware";
import authController from "@controllers/authController";

const routes = Router();

routes.get("/api", (_, res) => {
  res.send("API IFS for backend v1.0.0.");
});

routes.post("/auth", authController.store);

routes.get("/product", authenticate, (req, res) => {
  return res.sendStatus(200);
})

export default routes;
